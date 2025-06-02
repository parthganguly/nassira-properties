#!/usr/bin/env bash
set -e

step()  { echo -e "\033[1;33m[•] $1\033[0m"; }
fail()  { echo -e "\033[1;31m[×] $1\033[0m"; exit 1; }

cd "${projectDir}"

######################## 0. CLI checks ########################
step "Checking required CLIs"
command -v gh      >/dev/null 2>&1 || fail "GitHub CLI (gh) not found."
command -v vercel  >/dev/null 2>&1 || fail "Vercel CLI not found. Run: ${packageManager} i -g vercel@latest"

if ! gh auth status >/dev/null 2>&1;  then fail "Not logged in to gh. Run: gh auth login"; fi
if ! vercel whoami >/dev/null 2>&1;   then fail "Not logged in to Vercel. Run: vercel login"; fi

######################## 1. Git init & commit ########################
if [ ! -d ".git" ]; then
  step "Initialising Git repository"
  git init
  git branch -M main
fi

step "Staging & committing"
git add .
git commit -m "${1:-${defaultCommitMsg}}" || echo "Nothing to commit."

######################## 2. GitHub remote ########################
if ! git config --get remote.origin.url >/dev/null; then
  step "Creating GitHub repo & adding remote"
  gh repo create "${repoName}" --${repoVisibility} --source=. --remote=origin --${remoteProtocol} --push --gitignore none
fi

step "Pushing to GitHub"
git push -u origin main

######################## 3. Vercel link & env ########################
if [ ! -d ".vercel" ]; then
  step "Linking local folder to Vercel project"
  vercel link --yes --cwd . --project "${vercelProject}" ${vercelScope:+--scope "${vercelScope}"}
fi

if [ -f "${envFile}" ]; then
  step "Syncing environment variables from ${envFile}"
  vercel env pull "${envFile}" --yes
else
  step "No ${envFile} found; skipping env sync"
fi

######################## 4. Deploy ########################
step "Deploying to Vercel (production)"
deploy_output=$(vercel --prod --confirm --cwd .)
echo "$deploy_output"

prod_url=$(echo "$deploy_output" | grep -Eo 'https://[^ ]+\.vercel\.app')
if [ -n "$prod_url" ]; then
  echo -e "\n\033[1;32m✔ Deployed!\033[0m  Production URL: $prod_url"
else
  fail "Could not parse production URL."
fi 