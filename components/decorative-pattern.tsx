interface DecorativePatternProps {
  className?: string
  color?: string
  opacity?: string
}

export function DecorativePattern({
  className = "",
  color = "text-gold",
  opacity = "opacity-20",
}: DecorativePatternProps) {
  return (
    <div className={`${className} ${color} ${opacity}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g className="fill-current">
          {/* Geometric Islamic-inspired pattern */}
          <path d="M50,0 L100,25 L100,75 L50,100 L0,75 L0,25 Z" fillOpacity="0.2" />
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" fillOpacity="0.3" />
          <path d="M50,20 L70,35 L70,65 L50,80 L30,65 L30,35 Z" fillOpacity="0.4" />
          <circle cx="50" cy="50" r="10" fillOpacity="0.5" />
          <path
            d="M50,0 L55,25 L75,10 L60,30 L85,35 L60,40 L75,60 L55,45 L50,70 L45,45 L25,60 L40,40 L15,35 L40,30 L25,10 L45,25 Z"
            fillOpacity="0.2"
          />
        </g>
      </svg>
    </div>
  )
}

