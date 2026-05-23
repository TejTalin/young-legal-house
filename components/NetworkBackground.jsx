'use client';

const NODES = [
  // Row 1
  { x: 80,   y: 100, icon: '\uf6d3' }, // fa-hammer
  { x: 230,  y: 140, icon: '\uf508' }, // fa-user-tie
  { x: 400,  y: 110, icon: '\uf15c' }, // fa-file-alt
  { x: 570,  y: 160, icon: '\uf1ea' }, // fa-newspaper
  { x: 740,  y: 120, icon: '\uf66f' }, // fa-landmark
  { x: 920,  y: 150, icon: '\uf2b5' }, // fa-handshake
  { x: 1100, y: 105, icon: '\uf0b1' }, // fa-briefcase
  { x: 1270, y: 130, icon: '\uf24e' }, // fa-balance-scale
  // Row 2
  { x: 100,  y: 260, icon: '\uf24e' }, // fa-balance-scale
  { x: 300,  y: 290, icon: '\uf66f' }, // fa-landmark
  { x: 470,  y: 250, icon: '\uf2b5' }, // fa-handshake
  { x: 640,  y: 305, icon: '\uf0b1' }, // fa-briefcase
  { x: 820,  y: 265, icon: '\uf508' }, // fa-user-tie
  { x: 1000, y: 325, icon: '\uf15c' }, // fa-file-alt
  { x: 1170, y: 285, icon: '\uf1ea' }, // fa-newspaper
  { x: 1320, y: 310, icon: '\uf6d3' }, // fa-hammer
  // Row 3
  { x: 80,   y: 420, icon: '\uf1ea' }, // fa-newspaper
  { x: 260,  y: 455, icon: '\uf24e' }, // fa-balance-scale
  { x: 440,  y: 415, icon: '\uf6d3' }, // fa-hammer
  { x: 620,  y: 470, icon: '\uf508' }, // fa-user-tie
  { x: 800,  y: 430, icon: '\uf66f' }, // fa-landmark
  { x: 980,  y: 490, icon: '\uf15c' }, // fa-file-alt
  { x: 1160, y: 450, icon: '\uf2b5' }, // fa-handshake
  { x: 1340, y: 475, icon: '\uf0b1' }, // fa-briefcase
  // Row 4
  { x: 120,  y: 575, icon: '\uf0b1' }, // fa-briefcase
  { x: 320,  y: 615, icon: '\uf1ea' }, // fa-newspaper
  { x: 520,  y: 575, icon: '\uf24e' }, // fa-balance-scale
  { x: 720,  y: 630, icon: '\uf6d3' }, // fa-hammer
  { x: 920,  y: 590, icon: '\uf508' }, // fa-user-tie
  { x: 1120, y: 650, icon: '\uf66f' }, // fa-landmark
  { x: 1300, y: 610, icon: '\uf2b5' }, // fa-handshake
  // Row 5
  { x: 140,  y: 730, icon: '\uf66f' }, // fa-landmark
  { x: 360,  y: 770, icon: '\uf0b1' }, // fa-briefcase
  { x: 580,  y: 730, icon: '\uf1ea' }, // fa-newspaper
  { x: 800,  y: 790, icon: '\uf24e' }, // fa-balance-scale
  { x: 1020, y: 750, icon: '\uf6d3' }, // fa-hammer
  { x: 1200, y: 780, icon: '\uf508' }, // fa-user-tie
];

// Connections reference node indices — lines go exactly from node center to node center
const CONNECTIONS = [
  // Row 1 horizontal
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
  // Row 2 horizontal
  [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],
  // Row 3 horizontal
  [16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],
  // Row 4 horizontal
  [24,25],[25,26],[26,27],[27,28],[28,29],[29,30],
  // Row 5 horizontal
  [31,32],[32,33],[33,34],[34,35],[35,36],
  // Row1 → Row2 verticals
  [1,9],[2,10],[3,11],[4,12],[5,13],[6,14],
  // Row2 → Row3 verticals
  [9,17],[10,18],[11,19],[12,20],[13,21],[14,22],
  // Row3 → Row4 verticals
  [17,24],[18,25],[19,26],[20,27],[21,28],[22,29],
  // Row4 → Row5 verticals
  [24,31],[25,32],[26,33],[27,34],[28,35],[29,36],
];

export default function NetworkBackground() {
  return (
    <div className="community-bg" id="communityBg">
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', color: 'currentColor' }}
      >
        <defs>
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -100; }
            }
            .conn-line {
              stroke: currentColor;
              stroke-width: 1;
              fill: none;
              opacity: 0.28;
              stroke-dasharray: 55 35;
              animation: dash 9s linear infinite;
            }
            .conn-line:nth-child(3n+1) { animation-duration: 7s; animation-delay: -2s; }
            .conn-line:nth-child(3n+2) { animation-duration: 11s; animation-delay: -5s; }
            .conn-line:nth-child(3n)   { animation-duration: 8s;  animation-delay: -8s; }
            .bg-icon {
              font-family: "Font Awesome 6 Free";
              font-weight: 900;
              font-size: 18px;
              fill: currentColor;
              opacity: 0.55;
              text-anchor: middle;
              dominant-baseline: central;
            }
          `}</style>
        </defs>

        {/* Lines — from node center to node center */}
        <g>
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              className="conn-line"
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
            />
          ))}
        </g>

        {/* Icons — rendered as SVG text using FA unicode, centered on node x,y */}
        <g>
          {NODES.map((node, i) => (
            <text
              key={i}
              x={node.x}
              y={node.y}
              className="bg-icon"
            >
              {node.icon}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
