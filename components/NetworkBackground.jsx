'use client';

// All icon nodes with exact positions
const NODES = [
  // Row 1
  { x: 60,   y: 90,  icon: 'fa-hammer' },
  { x: 210,  y: 130, icon: 'fa-user-tie' },
  { x: 390,  y: 100, icon: 'fa-file-alt' },
  { x: 560,  y: 150, icon: 'fa-newspaper' },
  { x: 730,  y: 110, icon: 'fa-landmark' },
  { x: 910,  y: 140, icon: 'fa-handshake' },
  { x: 1090, y: 95,  icon: 'fa-briefcase' },
  { x: 1260, y: 120, icon: 'fa-balance-scale' },
  { x: 1360, y: 160, icon: 'fa-hammer' },
  // Row 2
  { x: 90,   y: 240, icon: 'fa-balance-scale' },
  { x: 290,  y: 275, icon: 'fa-landmark' },
  { x: 460,  y: 235, icon: 'fa-handshake' },
  { x: 630,  y: 295, icon: 'fa-briefcase' },
  { x: 810,  y: 255, icon: 'fa-user-tie' },
  { x: 990,  y: 315, icon: 'fa-file-alt' },
  { x: 1160, y: 275, icon: 'fa-newspaper' },
  { x: 1310, y: 300, icon: 'fa-hammer' },
  // Row 3
  { x: 70,   y: 400, icon: 'fa-newspaper' },
  { x: 250,  y: 440, icon: 'fa-balance-scale' },
  { x: 430,  y: 400, icon: 'fa-hammer' },
  { x: 610,  y: 460, icon: 'fa-user-tie' },
  { x: 790,  y: 420, icon: 'fa-landmark' },
  { x: 970,  y: 480, icon: 'fa-file-alt' },
  { x: 1150, y: 440, icon: 'fa-handshake' },
  { x: 1330, y: 465, icon: 'fa-briefcase' },
  // Row 4
  { x: 110,  y: 560, icon: 'fa-briefcase' },
  { x: 310,  y: 600, icon: 'fa-newspaper' },
  { x: 510,  y: 560, icon: 'fa-balance-scale' },
  { x: 710,  y: 620, icon: 'fa-hammer' },
  { x: 910,  y: 580, icon: 'fa-user-tie' },
  { x: 1110, y: 640, icon: 'fa-landmark' },
  { x: 1290, y: 600, icon: 'fa-handshake' },
  // Row 5
  { x: 130,  y: 720, icon: 'fa-landmark' },
  { x: 350,  y: 760, icon: 'fa-briefcase' },
  { x: 570,  y: 720, icon: 'fa-newspaper' },
  { x: 790,  y: 780, icon: 'fa-balance-scale' },
  { x: 1010, y: 740, icon: 'fa-hammer' },
  { x: 1190, y: 770, icon: 'fa-user-tie' },
];

// Lines connect FROM one node index TO another node index
const CONNECTIONS = [
  // Row 1 horizontal
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
  // Row 2 horizontal
  [9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],
  // Row 3 horizontal
  [17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],
  // Row 4 horizontal
  [25,26],[26,27],[27,28],[28,29],[29,30],[30,31],
  // Row 5 horizontal
  [32,33],[33,34],[34,35],[35,36],[36,37],
  // Row 1 → Row 2 verticals
  [1,10],[2,11],[3,12],[4,13],[5,14],[6,15],
  // Row 2 → Row 3 verticals
  [10,18],[11,19],[12,20],[13,21],[14,22],[15,23],
  // Row 3 → Row 4 verticals
  [18,25],[19,26],[20,27],[21,28],[22,29],[23,30],
  // Row 4 → Row 5 verticals
  [25,32],[26,33],[27,34],[28,35],[29,36],[30,37],
];

export default function NetworkBackground() {
  return (
    <div className="community-bg" id="communityBg">
      <svg
        className="network-svg"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <style>{`
            @keyframes flowLine {
              0%   { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -120; }
            }
            .bg-line {
              stroke: currentColor;
              stroke-width: 1;
              stroke-dasharray: 60 40;
              opacity: 0.3;
              animation: flowLine 8s linear infinite;
            }
            .bg-line:nth-child(3n)   { animation-duration: 11s; animation-delay: -3s; }
            .bg-line:nth-child(5n)   { animation-duration: 6s;  animation-delay: -5s; }
            .bg-line:nth-child(7n)   { animation-duration: 9s;  animation-delay: -1s; }
          `}</style>
        </defs>

        {/* Lines — each one connects exactly between two icon nodes */}
        <g>
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              className="bg-line"
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
            />
          ))}
        </g>

        {/* Icons — Font Awesome via foreignObject */}
        {NODES.map((node, i) => (
          <foreignObject
            key={i}
            x={node.x - 14}
            y={node.y - 14}
            width="28"
            height="28"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'currentColor',
                fontSize: '16px',
                opacity: 0.75,
              }}
            >
              <i className={`fas ${node.icon}`}></i>
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
}
