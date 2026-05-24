'use client';

const ICON_SIZE = 24;
const HALF = ICON_SIZE / 2;

const NODES = [
  // Row 1
  { x: 80,   y: 100, icon: 'fa-gavel' },
  { x: 230,  y: 140, icon: 'fa-user-tie' },
  { x: 400,  y: 110, icon: 'fa-file-alt' },
  { x: 570,  y: 160, icon: 'fa-newspaper' },
  { x: 740,  y: 120, icon: 'fa-landmark' },
  { x: 920,  y: 150, icon: 'fa-handshake' },
  { x: 1100, y: 105, icon: 'fa-briefcase' },
  { x: 1270, y: 130, icon: 'fa-balance-scale' },
  // Row 2
  { x: 100,  y: 260, icon: 'fa-balance-scale' },
  { x: 300,  y: 290, icon: 'fa-landmark' },
  { x: 470,  y: 250, icon: 'fa-handshake' },
  { x: 640,  y: 305, icon: 'fa-briefcase' },
  { x: 820,  y: 265, icon: 'fa-user-tie' },
  { x: 1000, y: 325, icon: 'fa-file-alt' },
  { x: 1170, y: 285, icon: 'fa-newspaper' },
  { x: 1320, y: 310, icon: 'fa-gavel' },
  // Row 3
  { x: 80,   y: 420, icon: 'fa-newspaper' },
  { x: 260,  y: 455, icon: 'fa-balance-scale' },
  { x: 440,  y: 415, icon: 'fa-gavel' },
  { x: 620,  y: 470, icon: 'fa-user-tie' },
  { x: 800,  y: 430, icon: 'fa-landmark' },
  { x: 980,  y: 490, icon: 'fa-file-alt' },
  { x: 1160, y: 450, icon: 'fa-handshake' },
  { x: 1340, y: 475, icon: 'fa-briefcase' },
  // Row 4
  { x: 120,  y: 575, icon: 'fa-briefcase' },
  { x: 320,  y: 615, icon: 'fa-newspaper' },
  { x: 520,  y: 575, icon: 'fa-balance-scale' },
  { x: 720,  y: 630, icon: 'fa-gavel' },
  { x: 920,  y: 590, icon: 'fa-user-tie' },
  { x: 1120, y: 650, icon: 'fa-landmark' },
  { x: 1300, y: 610, icon: 'fa-handshake' },
  // Row 5
  { x: 140,  y: 730, icon: 'fa-landmark' },
  { x: 360,  y: 770, icon: 'fa-briefcase' },
  { x: 580,  y: 730, icon: 'fa-newspaper' },
  { x: 800,  y: 790, icon: 'fa-balance-scale' },
  { x: 1020, y: 750, icon: 'fa-gavel' },
  { x: 1200, y: 780, icon: 'fa-user-tie' },
];

const CONNECTIONS = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
  [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],
  [16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],
  [24,25],[25,26],[26,27],[27,28],[28,29],[29,30],
  [31,32],[32,33],[33,34],[34,35],[35,36],
  [1,9],[2,10],[3,11],[4,12],[5,13],[6,14],
  [9,17],[10,18],[11,19],[12,20],[13,21],[14,22],
  [17,24],[18,25],[19,26],[20,27],[21,28],[22,29],
  [24,31],[25,32],[26,33],[27,34],[28,35],[29,36],
];

export default function NetworkBackground() {
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
              opacity: 0.3;
              stroke-dasharray: 50 30;
              animation: dashFlow 9s linear infinite;
            }
            .net-line:nth-child(3n+1) { animation-duration: 7s;  animation-delay: -1s; }
            .net-line:nth-child(3n+2) { animation-duration: 11s; animation-delay: -4s; }
            .net-line:nth-child(3n)   { animation-duration: 8s;  animation-delay: -7s; }
          `}</style>
        </defs>

        {/* Lines connecting icon centers exactly */}
        <g>
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              className="net-line"
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
            />
          ))}
        </g>

        {/* Icons — foreignObject centered exactly on node x,y */}
        {NODES.map((node, i) => (
          <foreignObject
            key={i}
            x={node.x - HALF}
            y={node.y - HALF}
            width={ICON_SIZE}
            height={ICON_SIZE}
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                width: `${ICON_SIZE}px`,
                height: `${ICON_SIZE}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'currentColor',
                fontSize: '15px',
                opacity: 0.8,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              <i className={`fas ${node.icon}`} />
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}
