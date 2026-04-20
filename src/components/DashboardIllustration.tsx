export function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 1280 820"
      className="w-full h-full"
      preserveAspectRatio="xMinYMin meet"
    >
      {/* Background */}
      <rect x="0" y="0" width="1280" height="820" fill="var(--card)" />

      {/* ============ LEFT SIDEBAR (0 – 260) ============ */}
      <rect x="0" y="0" width="260" height="820" fill="var(--foreground)" opacity="0.02" />
      <line x1="260" y1="0" x2="260" y2="820" stroke="var(--border)" strokeWidth="1" opacity="0.5" />

      {/* Workspace switcher */}
      <g>
        <rect x="16" y="16" width="228" height="36" rx="8" fill="var(--foreground)" opacity="0.03" />
        <rect x="24" y="24" width="20" height="20" rx="5" fill="var(--primary)" opacity="0.35" />
        <rect x="52" y="28" width="70" height="8" rx="2" fill="var(--foreground)" opacity="0.28" />
        <rect x="52" y="40" width="42" height="6" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="218" y="28" width="14" height="14" rx="3" fill="var(--foreground)" opacity="0.12" />
      </g>

      {/* Search bar */}
      <g>
        <rect x="16" y="64" width="228" height="32" rx="8" fill="var(--foreground)" opacity="0.04" />
        <circle cx="32" cy="80" r="5" fill="none" stroke="var(--foreground)" strokeWidth="1.3" opacity="0.25" />
        <line x1="36" y1="84" x2="40" y2="88" stroke="var(--foreground)" strokeWidth="1.3" opacity="0.25" />
        <rect x="46" y="76" width="90" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="214" y="74" width="22" height="12" rx="3" fill="var(--foreground)" opacity="0.08" />
      </g>

      {/* Nav section header */}
      <rect x="24" y="118" width="56" height="8" rx="2" fill="var(--foreground)" opacity="0.22" />

      {/* Primary nav items */}
      {[
        { label: 60 },
        { label: 78, active: true },
        { label: 64 },
        { label: 50 },
      ].map((item, i) => (
        <g key={`nav-main-${i}`}>
          <rect
            x="12"
            y={140 + i * 34}
            width="236"
            height="30"
            rx="6"
            fill={item.active ? "var(--foreground)" : "transparent"}
            opacity={item.active ? 0.07 : 0}
          />
          <rect
            x="24"
            y={149 + i * 34}
            width="14"
            height="14"
            rx="3"
            fill="var(--foreground)"
            opacity={item.active ? 0.4 : 0.15}
          />
          <rect
            x="46"
            y={152 + i * 34}
            width={item.label}
            height="8"
            rx="2"
            fill="var(--foreground)"
            opacity={item.active ? 0.42 : 0.2}
          />
          {item.active && (
            <rect
              x="220"
              y={151 + i * 34}
              width="18"
              height="12"
              rx="3"
              fill="var(--primary)"
              opacity="0.18"
            />
          )}
        </g>
      ))}

      {/* Second nav section */}
      <rect x="24" y="298" width="44" height="8" rx="2" fill="var(--foreground)" opacity="0.22" />

      {[
        { label: 72 },
        { label: 58 },
        { label: 80 },
        { label: 64 },
      ].map((item, i) => (
        <g key={`nav-sec-${i}`}>
          <rect x="24" y={321 + i * 32} width="14" height="14" rx="3" fill="var(--foreground)" opacity="0.13" />
          <rect x="46" y={324 + i * 32} width={item.label} height="8" rx="2" fill="var(--foreground)" opacity="0.17" />
        </g>
      ))}

      {/* Third nav section - Favorites */}
      <rect x="24" y="472" width="60" height="8" rx="2" fill="var(--foreground)" opacity="0.22" />

      {[
        { label: 90, dot: "var(--primary)", dotOpacity: 0.55, highlight: true },
        { label: 64, dot: "var(--foreground)", dotOpacity: 0.3 },
        { label: 72, dot: "var(--primary)", dotOpacity: 0.4 },
        { label: 56, dot: "var(--foreground)", dotOpacity: 0.3 },
      ].map((item, i) => (
        <g key={`fav-${i}`}>
          <rect
            x="12"
            y={494 + i * 34}
            width="236"
            height="30"
            rx="6"
            fill={item.highlight ? "var(--foreground)" : "transparent"}
            opacity={item.highlight ? 0.05 : 0}
          />
          <circle cx="32" cy={509 + i * 34} r="4" fill={item.dot} opacity={item.dotOpacity} />
          <rect
            x="46"
            y={506 + i * 34}
            width={item.label}
            height="8"
            rx="2"
            fill="var(--foreground)"
            opacity={item.highlight ? 0.32 : 0.18}
          />
        </g>
      ))}

      {/* User card at bottom */}
      <g>
        <rect x="12" y="760" width="236" height="48" rx="10" fill="var(--foreground)" opacity="0.045" />
        <circle cx="36" cy="784" r="14" fill="var(--primary)" opacity="0.3" />
        <rect x="58" y="775" width="96" height="8" rx="2" fill="var(--foreground)" opacity="0.22" />
        <rect x="58" y="789" width="62" height="6" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="218" y="780" width="14" height="14" rx="3" fill="var(--foreground)" opacity="0.15" />
      </g>

      {/* ============ MAIN CONTENT (260 – 980) ============ */}
      <line x1="980" y1="0" x2="980" y2="820" stroke="var(--border)" strokeWidth="1" opacity="0.5" />

      {/* Top bar */}
      <rect x="260" y="0" width="720" height="56" fill="var(--foreground)" opacity="0.015" />
      <line x1="260" y1="56" x2="980" y2="56" stroke="var(--border)" strokeWidth="1" opacity="0.35" />

      {/* Breadcrumb */}
      <rect x="288" y="22" width="66" height="12" rx="3" fill="var(--foreground)" opacity="0.22" />
      <rect x="360" y="25" width="6" height="6" rx="1" fill="var(--foreground)" opacity="0.15" />
      <rect x="374" y="22" width="88" height="12" rx="3" fill="var(--foreground)" opacity="0.28" />
      {/* Star icon */}
      <path
        d="M 478 22 L 481 28 L 488 28.8 L 483 33.4 L 484.2 40 L 478 36.8 L 471.8 40 L 473 33.4 L 468 28.8 L 475 28 Z"
        fill="var(--primary)"
        opacity="0.45"
      />

      {/* Top bar right cluster */}
      <rect x="820" y="20" width="44" height="16" rx="3" fill="var(--foreground)" opacity="0.1" />
      <rect x="878" y="20" width="16" height="16" rx="3" fill="var(--foreground)" opacity="0.08" />
      <rect x="902" y="20" width="16" height="16" rx="3" fill="var(--foreground)" opacity="0.08" />
      <rect x="930" y="16" width="34" height="24" rx="6" fill="var(--primary)" opacity="0.18" />

      {/* Issue header area */}
      <rect x="288" y="92" width="480" height="24" rx="4" fill="var(--foreground)" opacity="0.28" />

      {/* Description row 1 */}
      <rect x="288" y="140" width="240" height="10" rx="3" fill="var(--foreground)" opacity="0.14" />
      {/* Inline code chip between text */}
      <rect x="540" y="136" width="100" height="18" rx="4" fill="var(--primary)" opacity="0.1" />
      <rect x="552" y="143" width="76" height="6" rx="2" fill="var(--primary)" opacity="0.45" />
      <rect x="652" y="140" width="110" height="10" rx="3" fill="var(--foreground)" opacity="0.14" />

      {/* Description row 2 */}
      <rect x="288" y="162" width="440" height="10" rx="3" fill="var(--foreground)" opacity="0.12" />

      {/* Description row 3 */}
      <rect x="288" y="184" width="320" height="10" rx="3" fill="var(--foreground)" opacity="0.12" />

      {/* Tag row */}
      <g>
        <rect x="288" y="220" width="78" height="22" rx="4" fill="var(--foreground)" opacity="0.06" />
        <circle cx="300" cy="231" r="4" fill="var(--primary)" opacity="0.5" />
        <rect x="310" y="227" width="48" height="8" rx="2" fill="var(--foreground)" opacity="0.25" />

        <rect x="378" y="220" width="70" height="22" rx="4" fill="var(--foreground)" opacity="0.06" />
        <rect x="388" y="226" width="12" height="10" rx="2" fill="var(--foreground)" opacity="0.3" />
        <rect x="404" y="227" width="36" height="8" rx="2" fill="var(--foreground)" opacity="0.25" />

        <rect x="460" y="220" width="86" height="22" rx="4" fill="var(--primary)" opacity="0.1" />
        <rect x="470" y="227" width="66" height="8" rx="2" fill="var(--primary)" opacity="0.45" />
      </g>

      {/* Activity heading */}
      <rect x="288" y="282" width="72" height="12" rx="3" fill="var(--foreground)" opacity="0.3" />
      <rect x="368" y="284" width="24" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />

      {/* Vertical thread line */}
      <line x1="300" y1="326" x2="300" y2="714" stroke="var(--border)" strokeWidth="1" opacity="0.4" />

      {/* Activity item 1 – status change */}
      <g>
        <circle cx="300" cy="326" r="9" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
        <rect x="296" y="322" width="8" height="8" rx="2" fill="var(--foreground)" opacity="0.2" />
        <rect x="324" y="322" width="68" height="10" rx="3" fill="var(--foreground)" opacity="0.26" />
        <rect x="402" y="323" width="44" height="8" rx="2" fill="var(--foreground)" opacity="0.15" />
        <rect x="456" y="321" width="60" height="12" rx="3" fill="var(--primary)" opacity="0.15" />
        <rect x="466" y="326" width="40" height="6" rx="2" fill="var(--primary)" opacity="0.5" />
        <rect x="530" y="323" width="60" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />
      </g>

      {/* Activity item 2 – label added */}
      <g>
        <circle cx="300" cy="370" r="9" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
        <rect x="296" y="366" width="8" height="8" rx="2" fill="var(--foreground)" opacity="0.2" />
        <rect x="324" y="366" width="52" height="10" rx="3" fill="var(--foreground)" opacity="0.26" />
        <rect x="386" y="367" width="40" height="8" rx="2" fill="var(--foreground)" opacity="0.15" />
        <rect x="436" y="365" width="58" height="12" rx="3" fill="var(--foreground)" opacity="0.08" />
        <rect x="448" y="370" width="36" height="6" rx="2" fill="var(--foreground)" opacity="0.35" />
        <rect x="504" y="367" width="24" height="8" rx="2" fill="var(--foreground)" opacity="0.15" />
        <rect x="538" y="365" width="44" height="12" rx="3" fill="var(--foreground)" opacity="0.08" />
        <rect x="548" y="370" width="26" height="6" rx="2" fill="var(--foreground)" opacity="0.35" />
      </g>

      {/* Comment block 1 – user comment */}
      <g>
        <circle cx="300" cy="436" r="14" fill="var(--primary)" opacity="0.3" />
        <rect x="326" y="426" width="56" height="10" rx="3" fill="var(--foreground)" opacity="0.3" />
        <rect x="390" y="428" width="52" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="326" y="448" width="480" height="10" rx="3" fill="var(--foreground)" opacity="0.12" />
        <rect x="326" y="466" width="360" height="10" rx="3" fill="var(--foreground)" opacity="0.12" />
      </g>

      {/* Comment block 2 – @mention with nested */}
      <g>
        <circle cx="300" cy="532" r="14" fill="var(--primary)" opacity="0.45" />
        <rect x="326" y="522" width="36" height="10" rx="3" fill="var(--foreground)" opacity="0.3" />
        <rect x="370" y="524" width="52" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />

        {/* @mention chip + text */}
        <rect x="326" y="544" width="68" height="18" rx="4" fill="var(--primary)" opacity="0.14" />
        <rect x="336" y="550" width="50" height="6" rx="2" fill="var(--primary)" opacity="0.55" />
        <rect x="402" y="549" width="200" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />

        {/* Indented reply */}
        <path
          d="M 332 574 Q 332 584 342 584 L 352 584"
          stroke="var(--border)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <rect x="354" y="580" width="38" height="8" rx="2" fill="var(--foreground)" opacity="0.22" />
        <rect x="398" y="581" width="48" height="6" rx="2" fill="var(--primary)" opacity="0.4" />
        <rect x="452" y="581" width="36" height="6" rx="2" fill="var(--foreground)" opacity="0.12" />
      </g>

      {/* Comment block 3 – Agent card */}
      <g>
        <rect x="284" y="610" width="680" height="92" rx="10" fill="var(--foreground)" opacity="0.04" stroke="var(--border)" strokeWidth="1" />
        <rect x="300" y="626" width="20" height="20" rx="5" fill="var(--primary)" opacity="0.5" />
        <rect x="330" y="630" width="52" height="10" rx="3" fill="var(--foreground)" opacity="0.3" />
        <rect x="390" y="632" width="88" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />

        <rect x="300" y="660" width="160" height="8" rx="2" fill="var(--foreground)" opacity="0.15" />
        <rect x="470" y="660" width="92" height="8" rx="2" fill="var(--primary)" opacity="0.3" />
        <rect x="572" y="660" width="240" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />

        <rect x="300" y="680" width="420" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />
      </g>

      {/* Status transition summary */}
      <g>
        <circle cx="300" cy="742" r="9" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
        <circle cx="300" cy="742" r="3" fill="var(--primary)" opacity="0.5" />
        <rect x="324" y="738" width="50" height="10" rx="3" fill="var(--foreground)" opacity="0.3" />
        <rect x="384" y="740" width="40" height="8" rx="2" fill="var(--foreground)" opacity="0.13" />
        <rect x="434" y="736" width="52" height="14" rx="3" fill="var(--foreground)" opacity="0.08" />
        <rect x="444" y="741" width="32" height="6" rx="2" fill="var(--foreground)" opacity="0.4" />
        <rect x="496" y="740" width="22" height="8" rx="2" fill="var(--foreground)" opacity="0.13" />
        <rect x="528" y="736" width="64" height="14" rx="3" fill="var(--primary)" opacity="0.14" />
        <rect x="538" y="741" width="44" height="6" rx="2" fill="var(--primary)" opacity="0.5" />
        <rect x="602" y="740" width="40" height="8" rx="2" fill="var(--foreground)" opacity="0.13" />
      </g>

      {/* ============ RIGHT PANEL (980 – 1280) ============ */}
      {/* Top bar */}
      <rect x="980" y="0" width="300" height="56" fill="var(--foreground)" opacity="0.015" />
      <line x1="980" y1="56" x2="1280" y2="56" stroke="var(--border)" strokeWidth="1" opacity="0.35" />
      <rect x="1000" y="22" width="82" height="12" rx="3" fill="var(--foreground)" opacity="0.26" />
      <rect x="1204" y="22" width="14" height="12" rx="2" fill="var(--foreground)" opacity="0.12" />
      <rect x="1226" y="22" width="14" height="12" rx="2" fill="var(--foreground)" opacity="0.12" />
      <rect x="1248" y="22" width="14" height="12" rx="2" fill="var(--foreground)" opacity="0.12" />

      {/* Properties section */}
      <g>
        {[
          { y: 90, label: 54, value: 68, accent: true },
          { y: 122, label: 48, value: 42 },
          { y: 154, label: 62, value: 60, avatar: true },
          { y: 186, label: 50, value: 52, accent: true },
        ].map((prop, i) => (
          <g key={`prop-${i}`}>
            <rect x="1000" y={prop.y + 2} width="14" height="10" rx="2" fill="var(--foreground)" opacity="0.18" />
            <rect x="1024" y={prop.y + 3} width={prop.label} height="8" rx="2" fill="var(--foreground)" opacity="0.14" />

            {prop.avatar ? (
              <circle cx="1180" cy={prop.y + 7} r="7" fill="var(--primary)" opacity="0.4" />
            ) : (
              <rect
                x="1174"
                y={prop.y}
                width="14"
                height="14"
                rx="3"
                fill={prop.accent ? "var(--primary)" : "var(--foreground)"}
                opacity={prop.accent ? 0.45 : 0.2}
              />
            )}
            <rect
              x="1196"
              y={prop.y + 3}
              width={prop.value}
              height="8"
              rx="2"
              fill="var(--foreground)"
              opacity="0.24"
            />
          </g>
        ))}

        {/* Sub-item for assignee */}
        <path d="M 1180 178 Q 1180 190 1192 190 L 1202 190" stroke="var(--border)" strokeWidth="1" fill="none" opacity="0.5" />
        <rect x="1204" y="184" width="14" height="14" rx="3" fill="var(--primary)" opacity="0.35" />
        <rect x="1226" y="187" width="44" height="8" rx="2" fill="var(--foreground)" opacity="0.24" />
      </g>

      {/* Divider */}
      <line x1="1000" y1="238" x2="1260" y2="238" stroke="var(--border)" strokeWidth="1" opacity="0.3" />

      {/* Labels section */}
      <rect x="1000" y="258" width="44" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />
      <g>
        <rect x="1000" y="280" width="76" height="22" rx="5" fill="var(--primary)" opacity="0.14" />
        <circle cx="1012" cy="291" r="3" fill="var(--primary)" opacity="0.6" />
        <rect x="1022" y="287" width="46" height="8" rx="2" fill="var(--primary)" opacity="0.5" />

        <rect x="1084" y="280" width="62" height="22" rx="5" fill="var(--foreground)" opacity="0.08" />
        <circle cx="1096" cy="291" r="3" fill="var(--foreground)" opacity="0.4" />
        <rect x="1106" y="287" width="34" height="8" rx="2" fill="var(--foreground)" opacity="0.28" />

        <rect x="1154" y="280" width="66" height="22" rx="5" fill="var(--foreground)" opacity="0.08" />
        <circle cx="1166" cy="291" r="3" fill="var(--foreground)" opacity="0.4" />
        <rect x="1176" y="287" width="40" height="8" rx="2" fill="var(--foreground)" opacity="0.28" />

        <rect x="1000" y="310" width="72" height="22" rx="5" fill="var(--foreground)" opacity="0.08" />
        <circle cx="1012" cy="321" r="3" fill="var(--primary)" opacity="0.5" />
        <rect x="1022" y="317" width="44" height="8" rx="2" fill="var(--foreground)" opacity="0.28" />
      </g>

      {/* Divider */}
      <line x1="1000" y1="360" x2="1260" y2="360" stroke="var(--border)" strokeWidth="1" opacity="0.3" />

      {/* Links / git info */}
      <rect x="1000" y="380" width="60" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />

      <g>
        <rect x="1000" y="400" width="260" height="32" rx="6" fill="var(--foreground)" opacity="0.04" />
        <rect x="1012" y="411" width="12" height="10" rx="2" fill="var(--primary)" opacity="0.45" />
        <rect x="1030" y="411" width="80" height="8" rx="2" fill="var(--foreground)" opacity="0.24" />
        <rect x="1116" y="412" width="48" height="6" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="1222" y="410" width="30" height="12" rx="3" fill="var(--primary)" opacity="0.15" />
      </g>

      <g>
        <rect x="1000" y="438" width="260" height="32" rx="6" fill="var(--foreground)" opacity="0.04" />
        <rect x="1012" y="449" width="12" height="10" rx="2" fill="var(--foreground)" opacity="0.25" />
        <rect x="1030" y="449" width="100" height="8" rx="2" fill="var(--foreground)" opacity="0.24" />
        <rect x="1136" y="450" width="48" height="6" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="1222" y="448" width="30" height="12" rx="3" fill="var(--foreground)" opacity="0.1" />
      </g>

      {/* Divider */}
      <line x1="1000" y1="498" x2="1260" y2="498" stroke="var(--border)" strokeWidth="1" opacity="0.3" />

      {/* Agent/AI panel header */}
      <g>
        <rect x="1000" y="520" width="260" height="40" rx="8" fill="var(--foreground)" opacity="0.04" />
        <rect x="1012" y="530" width="20" height="20" rx="5" fill="var(--primary)" opacity="0.5" />
        <rect x="1040" y="534" width="56" height="10" rx="3" fill="var(--foreground)" opacity="0.3" />
        <rect x="1040" y="548" width="36" height="6" rx="2" fill="var(--foreground)" opacity="0.14" />
        <rect x="1238" y="536" width="12" height="10" rx="2" fill="var(--foreground)" opacity="0.15" />
      </g>

      {/* Agent content */}
      <g>
        <rect x="1000" y="576" width="130" height="10" rx="3" fill="var(--foreground)" opacity="0.22" />
        <rect x="1136" y="578" width="54" height="8" rx="2" fill="var(--primary)" opacity="0.35" />

        <rect x="1000" y="600" width="160" height="8" rx="2" fill="var(--foreground)" opacity="0.12" />
        <rect x="1000" y="616" width="120" height="8" rx="2" fill="var(--primary)" opacity="0.25" />

        <rect x="1000" y="644" width="130" height="10" rx="3" fill="var(--foreground)" opacity="0.22" />

        {/* List items */}
        <rect x="1008" y="668" width="4" height="4" rx="1" fill="var(--foreground)" opacity="0.35" />
        <rect x="1020" y="666" width="172" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />
        <rect x="1020" y="680" width="56" height="8" rx="2" fill="var(--primary)" opacity="0.28" />
        <rect x="1082" y="680" width="40" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />

        <rect x="1008" y="704" width="4" height="4" rx="1" fill="var(--foreground)" opacity="0.35" />
        <rect x="1020" y="702" width="196" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />
        <rect x="1020" y="716" width="120" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />

        {/* Thinking indicator row */}
        <rect x="1000" y="738" width="16" height="16" rx="3" fill="var(--foreground)" opacity="0.08" />
        <circle cx="1004" cy="742" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1008" cy="742" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1012" cy="742" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1004" cy="746" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1008" cy="746" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1012" cy="746" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1004" cy="750" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1008" cy="750" r="1.1" fill="var(--primary)" opacity="0.55" />
        <circle cx="1012" cy="750" r="1.1" fill="var(--primary)" opacity="0.55" />

        <rect x="1024" y="742" width="60" height="8" rx="2" fill="var(--foreground)" opacity="0.26" />
      </g>

      {/* Message input */}
      <g>
        <rect x="1000" y="770" width="260" height="40" rx="8" fill="var(--foreground)" opacity="0.04" stroke="var(--border)" strokeWidth="1" />
        <rect x="1014" y="786" width="120" height="8" rx="2" fill="var(--foreground)" opacity="0.14" />
        <rect x="1214" y="780" width="14" height="14" rx="3" fill="var(--foreground)" opacity="0.14" />
        <circle cx="1246" cy="790" r="10" fill="var(--primary)" opacity="0.4" />
      </g>
    </svg>
  );
}
