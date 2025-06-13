/**
 * Generates a URL-safe slug from a string
 * @param str The string to convert to a slug
 * @returns A URL-safe slug
 */
export function generateSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')     // Replace non-alphanumeric chars with hyphens
    .replace(/(^-|-$)/g, '');        // Trim leading/trailing hyphens
}

/**
 * Normalizes a slug for database queries
 * @param slug The slug to normalize
 * @returns A normalized slug
 */
export function normalizeSlug(slug: string): string {
  return decodeURIComponent(slug).toLowerCase();
}

/**
 * Ensures a slug is URL-safe
 * @param slug The slug to validate
 * @returns true if the slug is URL-safe
 */
export function isUrlSafeSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

/**
 * Generates a unique slug by appending a number if needed
 * @param baseSlug The base slug to make unique
 * @param existingSlugs Array of existing slugs to check against
 * @returns A unique slug
 */
export function generateUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
  let slug = baseSlug;
  let counter = 1;
  
  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
} 