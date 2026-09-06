export default function PixelLandscape({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      role="img"
      aria-label="Pixel art landscape at night with a person and dog looking toward distant mountains"
    >
      {/* night sky */}
      <rect x="0" y="0" width="240" height="180" fill="#1d2021" />
      {/* stars */}
      <rect x="30" y="20" width="3" height="3" fill="#a89984" />
      <rect x="70" y="40" width="2" height="2" fill="#a89984" />
      <rect x="120" y="15" width="3" height="3" fill="#d5c4a1" />
      <rect x="180" y="30" width="2" height="2" fill="#a89984" />
      <rect x="200" y="55" width="3" height="3" fill="#d5c4a1" />
      <rect x="90" y="60" width="2" height="2" fill="#a89984" />
      {/* moon */}
      <rect x="205" y="70" width="16" height="16" fill="#d5c4a1" />
      <rect x="213" y="70" width="8" height="16" fill="#1d2021" />

      {/* far mountains */}
      <polygon points="0,120 30,80 60,120" fill="#32302f" />
      <polygon points="40,120 80,70 120,120" fill="#3c3836" />
      <polygon points="120,120 160,85 200,120" fill="#282828" />
      <polygon points="180,120 220,75 240,110 240,120" fill="#3c3836" />

      {/* city silhouettes in distance */}
      <rect x="20" y="95" width="8" height="22" fill="#504945" />
      <rect x="20" y="90" width="4" height="5" fill="#d79921" />
      <rect x="30" y="100" width="9" height="17" fill="#504945" />
      <rect x="30" y="95" width="3" height="4" fill="#fabd2f" />
      <rect x="46" y="92" width="10" height="25" fill="#3c3836" />
      <rect x="46" y="86" width="4" height="6" fill="#fe8019" />
      <rect x="60" y="98" width="7" height="19" fill="#504945" />
      <rect x="73" y="94" width="9" height="23" fill="#3c3836" />
      <rect x="132" y="95" width="8" height="22" fill="#504945" />
      <rect x="132" y="90" width="4" height="5" fill="#d79921" />
      <rect x="142" y="100" width="10" height="17" fill="#3c3836" />
      <rect x="142" y="95" width="3" height="4" fill="#fabd2f" />
      <rect x="178" y="95" width="8" height="22" fill="#504945" />
      <rect x="188" y="100" width="9" height="17" fill="#3c3836" />

      {/* warm lamp glow near person */}
      <rect x="64" y="96" width="5" height="5" fill="#fe8019" opacity="0.8" />
      <rect x="60" y="92" width="13" height="13" fill="#fe8019" opacity="0.25" />

      {/* ground / hills */}
      <rect x="0" y="120" width="240" height="60" fill="#282828" />
      <rect x="0" y="132" width="240" height="8" fill="#32302f" />

      {/* person looking toward city */}
      {/* legs */}
      <rect x="30" y="148" width="5" height="12" fill="#928374" />
      <rect x="41" y="148" width="5" height="12" fill="#928374" />
      {/* body */}
      <rect x="27" y="126" width="22" height="22" fill="#ebdbb2" />
      <rect x="31" y="124" width="14" height="4" fill="#d3869b" />
      {/* head */}
      <rect x="30" y="112" width="16" height="12" fill="#d79921" />
      <rect x="34" y="108" width="8" height="6" fill="#3c3836" />
      {/* arm */}
      <rect x="24" y="128" width="4" height="12" fill="#d5c4a1" />

      {/* dog next to person */}
      {/* body */}
      <rect x="58" y="128" width="18" height="10" fill="#a89984" />
      {/* legs */}
      <rect x="59" y="138" width="4" height="12" fill="#928374" />
      <rect x="70" y="138" width="4" height="12" fill="#928374" />
      {/* tail */}
      <rect x="76" y="124" width="4" height="5" fill="#a89984" />
      {/* head */}
      <rect x="52" y="122" width="9" height="7" fill="#a89984" />
      <rect x="52" y="126" width="3" height="3" fill="#1d2021" />
      <rect x="56" y="127" width="3" height="2" fill="#1d2021" />

      {/* grass tufts */}
      <rect x="90" y="138" width="3" height="6" fill="#689d6a" />
      <rect x="94" y="136" width="3" height="8" fill="#8ec07c" />
      <rect x="160" y="134" width="3" height="10" fill="#689d6a" />
      <rect x="200" y="136" width="3" height="8" fill="#8ec07c" />
    </svg>
  );
}
