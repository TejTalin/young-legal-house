export default function NetworkBackground() {

  const nodes = [
    // Row 0 (y=85) — 8 nodes
    { x: 70,   y: 85,  icon: 0 },
    { x: 250,  y: 85,  icon: 1 },
    { x: 430,  y: 85,  icon: 2 },
    { x: 610,  y: 85,  icon: 3 },
    { x: 790,  y: 85,  icon: 4 },
    { x: 970,  y: 85,  icon: 5 },
    { x: 1150, y: 85,  icon: 6 },
    { x: 1330, y: 85,  icon: 7 },
    // Row 1 (y=215) — 7 nodes (offset)
    { x: 160,  y: 215, icon: 2 },
    { x: 340,  y: 215, icon: 3 },
    { x: 520,  y: 215, icon: 4 },
    { x: 700,  y: 215, icon: 5 },
    { x: 880,  y: 215, icon: 6 },
    { x: 1060, y: 215, icon: 7 },
    { x: 1240, y: 215, icon: 0 },
    // Row 2 (y=345) — 8 nodes
    { x: 70,   y: 345, icon: 4 },
    { x: 250,  y: 345, icon: 5 },
    { x: 430,  y: 345, icon: 6 },
    { x: 610,  y: 345, icon: 7 },
    { x: 790,  y: 345, icon: 0 },
    { x: 970,  y: 345, icon: 1 },
    { x: 1150, y: 345, icon: 2 },
    { x: 1330, y: 345, icon: 3 },
    // Row 3 (y=475) — 7 nodes (offset)
    { x: 160,  y: 475, icon: 6 },
    { x: 340,  y: 475, icon: 7 },
    { x: 520,  y: 475, icon: 0 },
    { x: 700,  y: 475, icon: 1 },
    { x: 880,  y: 475, icon: 2 },
    { x: 1060, y: 475, icon: 3 },
    { x: 1240, y: 475, icon: 4 },
    // Row 4 (y=605) — 8 nodes
    { x: 70,   y: 605, icon: 0 },
    { x: 250,  y: 605, icon: 1 },
    { x: 430,  y: 605, icon: 2 },
    { x: 610,  y: 605, icon: 3 },
    { x: 790,  y: 605, icon: 4 },
    { x: 970,  y: 605, icon: 5 },
    { x: 1150, y: 605, icon: 6 },
    { x: 1330, y: 605, icon: 7 },
    // Row 5 (y=735) — 7 nodes (offset)
    { x: 160,  y: 735, icon: 2 },
    { x: 340,  y: 735, icon: 3 },
    { x: 520,  y: 735, icon: 4 },
    { x: 700,  y: 735, icon: 5 },
    { x: 880,  y: 735, icon: 6 },
    { x: 1060, y: 735, icon: 7 },
    { x: 1240, y: 735, icon: 0 },
  ];

  // Every node connected to horizontal neighbours + diagonals to row below
  const connections = [
    // Row 0 horizontal
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
    // Row 1 horizontal
    [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],
    // Row 2 horizontal
    [15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],
    // Row 3 horizontal
    [23,24],[24,25],[25,26],[26,27],[27,28],[28,29],
    // Row 4 horizontal
    [30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],
    // Row 5 horizontal
    [38,39],[39,40],[40,41],[41,42],[42,43],[43,44],
    // Row0 → Row1 diagonals
    [0,8],[1,8],[1,9],[2,9],[2,10],[3,10],[3,11],[4,11],[4,12],[5,12],[5,13],[6,13],[6,14],[7,14],
    // Row1 → Row2 diagonals
    [8,15],[8,16],[9,16],[9,17],[10,17],[10,18],[11,18],[11,19],[12,19],[12,20],[13,20],[13,21],[14,21],[14,22],
    // Row2 → Row3 diagonals
    [15,23],[16,23],[16,24],[17,24],[17,25],[18,25],[18,26],[19,26],[19,27],[20,27],[20,28],[21,28],[21,29],[22,29],
    // Row3 → Row4 diagonals
    [23,30],[23,31],[24,31],[24,32],[25,32],[25,33],[26,33],[26,34],[27,34],[27,35],[28,35],[28,36],[29,36],[29,37],
    // Row4 → Row5 diagonals
    [30,38],[31,38],[31,39],[32,39],[32,40],[33,40],[33,41],[34,41],[34,42],[35,42],[35,43],[36,43],[36,44],[37,44],
  ];

  // Icon renderer — exact paths matching the image
  const renderIcon = (type, cx, cy) => {
    const s = 14; // half-size of icon bounding box
    switch(type) {
      case 0: // GAVEL — angled head + handle + sound block
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-11" y="-5" width="14" height="8" rx="1.5" transform="rotate(-40 0 0)"/>
            <line x1="2" y1="4" x2="10" y2="13"/>
            <rect x="-11" y="14" width="22" height="5" rx="1.5"/>
          </g>
        );
      case 1: // LAWYER — circle head + suit + tie
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="0" cy="-11" r="7"/>
            <path d="M-12 14 C-12 1 -7 -3 0 -3 C7 -3 12 1 12 14"/>
            <line x1="-3" y1="-3" x2="0" y2="3"/>
            <line x1="3" y1="-3" x2="0" y2="3"/>
            <line x1="0" y1="3" x2="0" y2="9"/>
          </g>
        );
      case 2: // DOCUMENT — page with folded corner + 3 lines
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-10 -14 L7 -14 L13 -8 L13 14 L-10 14 Z"/>
            <path d="M7 -14 L7 -8 L13 -8"/>
            <line x1="-5" y1="-3" x2="7" y2="-3"/>
            <line x1="-5" y1="2" x2="7" y2="2"/>
            <line x1="-5" y1="7" x2="3" y2="7"/>
          </g>
        );
      case 3: // NEWSPAPER — outer rect + inner image box + text lines
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-12" y="-14" width="24" height="28" rx="1.5"/>
            <rect x="-9" y="-11" width="10" height="9" rx="1"/>
            <line x1="3" y1="-9" x2="9" y2="-9"/>
            <line x1="3" y1="-5" x2="9" y2="-5"/>
            <line x1="3" y1="-1" x2="9" y2="-1"/>
            <line x1="-9" y1="2" x2="9" y2="2"/>
            <line x1="-9" y1="6" x2="9" y2="6"/>
            <line x1="-9" y1="10" x2="5" y2="10"/>
          </g>
        );
      case 4: // COURT BUILDING — pediment + columns + base
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-15 -4 L0 -16 L15 -4 Z"/>
            <circle cx="0" cy="-10" r="1.8" fill="currentColor" stroke="none"/>
            <rect x="-14" y="-4" width="28" height="3.5"/>
            <line x1="-9" y1="-0.5" x2="-9" y2="9"/>
            <line x1="-3" y1="-0.5" x2="-3" y2="9"/>
            <line x1="3" y1="-0.5" x2="3" y2="9"/>
            <line x1="9" y1="-0.5" x2="9" y2="9"/>
            <rect x="-14" y="9" width="28" height="3.5"/>
            <rect x="-16" y="12.5" width="32" height="3.5"/>
          </g>
        );
      case 5: // HANDSHAKE — two cuffs + clasped hands
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-16" y="-5" width="9" height="10" rx="2"/>
            <rect x="7" y="-5" width="9" height="10" rx="2"/>
            <path d="M-7 -5 C-3 -12 3 -12 7 -5"/>
            <path d="M-7 5 C-3 12 3 12 7 5"/>
            <path d="M-7 -5 C-4 -9 4 -9 7 -5"/>
            <path d="M-7 5 C-4 9 4 9 7 5"/>
            <ellipse cx="0" cy="0" rx="5" ry="6"/>
          </g>
        );
      case 6: // BRIEFCASE — body + handle + horizontal bar + latch
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-13" y="-6" width="26" height="20" rx="2.5"/>
            <path d="M-5 -6 L-5 -10 Q-5 -13 0 -13 Q5 -13 5 -10 L5 -6"/>
            <line x1="-13" y1="4" x2="13" y2="4"/>
            <rect x="-3" y="2" width="6" height="5" rx="1"/>
          </g>
        );
      case 7: // SCALES OF JUSTICE — pole + beam + two hanging pans
        return (
          <g key={`ic-${cx}-${cy}`} transform={`translate(${cx} ${cy})`} stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <line x1="0" y1="-15" x2="0" y2="12"/>
            <circle cx="0" cy="-15" r="2" fill="currentColor" stroke="none"/>
            <line x1="-14" y1="-8" x2="14" y2="-8"/>
            <line x1="-14" y1="-8" x2="-16" y2="2"/>
            <line x1="-14" y1="-8" x2="-12" y2="2"/>
            <path d="M-18 2 Q-14 7 -10 2"/>
            <line x1="14" y1="-8" x2="12" y2="2"/>
            <line x1="14" y1="-8" x2="16" y2="2"/>
            <path d="M10 2 Q14 7 18 2"/>
            <line x1="-6" y1="12" x2="6" y2="12"/>
          </g>
        );
      default: return null;
    }
  };

  return (
    <div className="community-bg" id="communityBg">
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <style>{`
            @keyframes dashFlow {
              to { stroke-dashoffset: -90; }
            }
            .net-line {
              stroke: currentColor;
              stroke-width: 1;
              fill: none;
              opacity: 0.25;
              stroke-dasharray: 50 30;
              animation: dashFlow 9s linear infinite;
            }
            .net-line:nth-child(3n+1) { animation-duration: 7s;  animation-delay: -1s; }
            .net-line:nth-child(3n+2) { animation-duration: 11s; animation-delay: -4s; }
            .net-line:nth-child(3n)   { animation-duration: 8s;  animation-delay: -7s; }
          `}</style>
        </defs>

        {/* Lines — from node center to node center */}
        <g>
          {connections.map(([a, b], i) => (
            <line
              key={`l-${i}`}
              className="net-line"
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
            />
          ))}
        </g>

        {/* Icons — exact SVG paths, centered on node x,y */}
        <g opacity="0.55">
          {nodes.map((node, i) => renderIcon(node.icon, node.x, node.y))}
        </g>

      </svg>
    </div>
  );
}
