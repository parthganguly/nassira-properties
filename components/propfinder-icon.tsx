export function PropfinderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <circle cx="16" cy="16" r="15" stroke="#D4AF37" strokeWidth="2" fill="white" />
      <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#D4AF37" fontWeight="bold" fontFamily="sans-serif">PF</text>
    </svg>
  );
} 