'use client';

const ICON_SIZE = 24;
const HALF = ICON_SIZE / 2;

// 6 rows, evenly spread across 1400x900
// Every node will connect horizontally, vertically, AND diagonally
const NODES = [
  // Row 0 — y=80
  { x: 70,   y: 80  }, // 0
  { x: 250,  y: 80  }, // 1
  { x: 430,  y: 80  }, // 2
  { x: 610,  y: 80  }, // 3
  { x: 790,  y: 80  }, // 4
  { x: 970,  y: 80  }, // 5
  { x: 1150, y: 80  }, // 6
  { x: 1330, y: 80  }, // 7

  // Row 1 — y=210
  { x: 160,  y: 210 }, // 8
  { x: 340,  y: 210 }, // 9
  { x: 520,  y: 210 }, // 10
  { x: 700,  y: 210 }, // 11
  { x: 880,  y: 210 }, // 12
  { x: 1060, y: 210 }, // 13
  { x: 1240, y: 210 }, // 14

  // Row 2 — y=340
  { x: 70,   y: 340 }, // 15
  { x: 250,  y: 340 }, // 16
  { x: 430,  y: 340 }, // 17
  { x: 610,  y: 340 }, // 18
  { x: 790,  y: 340 }, // 19
  { x: 970,  y: 340 }, // 20
  { x: 1150, y: 340 }, // 21
  { x: 1330, y: 340 }, // 22

  // Row 3 — y=470
  { x: 160,  y: 470 }, // 23
  { x: 340,  y: 470 }, // 24
  { x: 520,  y: 470 }, // 25
  { x: 700,  y: 470 }, // 26
  { x: 880,  y: 470 }, // 27
  { x: 1060, y: 470 }, // 28
  { x: 1240, y: 470 }, // 29

  // Row 4 — y=600
  { x: 70,   y: 600 }, // 30
  { x: 250,  y: 600 }, // 31
  { x: 430,  y: 600 }, // 32
  { x: 610,  y: 600 }, // 33
  { x: 790,  y: 600 }, // 34
  { x: 970,  y: 600 }, // 35
  { x: 1150, y: 600 }, // 36
  { x: 1330, y: 600 }, // 37

  // Row 5 — y=730
  { x: 160,  y: 730 }, // 38
  { x: 340,  y: 730 }, // 39
  { x: 520,  y: 730 }, // 40
  { x: 700,  y: 730 }, // 41
  { x: 880,  y: 730 }, // 42
  { x: 1060, y: 730 }, // 43
  { x: 1240, y: 730 }, // 44
];

// Assign icons cycling through all 8
const ICONS = [
  'fa-gavel','fa-user-tie','fa-file-alt','fa-newspaper',
  'fa-landmark','fa-handshake','fa-briefcase','fa-balance-scale',
];

const NODESWITHICONS = NODES.map((n, i) => ({ ...n, icon: ICONS[i % ICONS.length] }));

// Connections: horizontal, vertical, and diagonal — every node fully connected
const CONNECTIONS = [
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

  // Row0 → Row1 diagonals (staggered grid)
  [0,8],[1,8],[1,9],[2,9],[2,10],[3,10],[3,11],
  [4,11],[4,12],[5,12],[5,13],[6,13],[6,14],[7,14],

  // Row1 → Row2 diagonals
  [8,15],[8,16],[9,16],[9,17],[10,17],[10,18],[11,18],
  [11,19],[12,19],[12,20],[13,20],[13,21],[14,21],[14,22],

  // Row2 → Row3 diagonals
  [15,23],[16,23],[16,24],[17,24],[17,25],[18,25],[18,26],
  [19,26],[19,27],[20,27],[20,28],[21,28],[21,29],[22,29],

  // Row3 → Row4 diagonals
  [23,30],[23,31],[24,31],[24,32],[25,32],[25,33],[26,33],
  [26,34],[27,34],[27,35],[28,35],[28,36],[29,36],[29,37],

  // Row4 → Row5 diagonals
  [30,38],[31,38],[31,39],[32,39],[32,40],[33,40],[33,41],
  [34,41],[34,42],[35,42],[35,43],[36,43],[36,44],[37,44],
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

        {/* Lines — every icon connected */}
        <g>
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              className="net-line"
              x1={NODESWITHICONS[a].x}
              y1={NODESWITHICONS[a].y}
              x2={NODESWITHICONS[b].x}
              y2={NODESWITHICONS[b].y}
            />
          ))}
        </g>

        {/* Icons */}
        {NODESWITHICONS.map((node, i) => (
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
                fontSize: '14px',
                opacity: 0.75,
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
