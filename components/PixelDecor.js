export default function PixelDecor({ className = "" }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg width="220" height="150" viewBox="0 0 220 150" className="opacity-70">
        {/* desk surface */}
        <rect x="0" y="120" width="220" height="8" fill="#3c3836" />
        <rect x="0" y="128" width="220" height="6" fill="#32302f" />
        {/* desk legs */}
        <rect x="10" y="134" width="6" height="16" fill="#282828" />
        <rect x="204" y="134" width="6" height="16" fill="#282828" />

        {/* potted plant left */}
        <rect x="24" y="98" width="22" height="22" fill="#b16286" />
        <rect x="26" y="96" width="18" height="4" fill="#d3869b" />
        <rect x="31" y="80" width="4" height="8" fill="#689d6a" />
        <rect x="27" y="72" width="4" height="4" fill="#8ec07c" />
        <rect x="31" y="66" width="4" height="4" fill="#98971a" />
        <rect x="38" y="72" width="4" height="4" fill="#689d6a" />
        <rect x="36" y="60" width="4" height="4" fill="#8ec07c" />

        {/* stack of books */}
        <rect x="70" y="116" width="40" height="4" fill="#458588" />
        <rect x="74" y="112" width="36" height="4" fill="#d3869b" />
        <rect x="71" y="108" width="38" height="4" fill="#98971a" />

        {/* small cat sitting on desk */}
        <rect x="130" y="100" width="10" height="14" fill="#a89984" />
        <rect x="128" y="96" width="14" height="6" fill="#a89984" />
        <rect x="126" y="92" width="4" height="4" fill="#a89984" />
        <rect x="140" y="92" width="4" height="4" fill="#a89984" />
        <rect x="132" y="102" width="3" height="3" fill="#928374" />
        <rect x="136" y="102" width="3" height="3" fill="#928374" />

        {/* retro desk lamp right */}
        <rect x="182" y="76" width="4" height="44" fill="#504945" />
        <rect x="168" y="112" width="16" height="8" fill="#3c3836" />
        <rect x="178" y="60" width="14" height="18" fill="#fabd2f" />
        <rect x="176" y="60" width="18" height="4" fill="#fe8019" />
        <rect x="168" y="64" width="6" height="4" fill="#d79921" />
      </svg>
    </div>
  );
}
