'use client';
import { useEffect, useRef } from 'react';

// Icon positions across the grid
const NODES = [
  // Row 1
  { x: 60,   y: 90,  icon: 'fa-gavel' },
  { x: 210,  y: 130, icon: 'fa-user-tie' },
  { x: 390,  y: 100, icon: 'fa-file-alt' },
  { x: 560,  y: 150, icon: 'fa-newspaper' },
  { x: 730,  y: 110, icon: 'fa-landmark' },
  { x: 910,  y: 140, icon: 'fa-handshake' },
  { x: 1090, y: 95,  icon: 'fa-briefcase' },
  { x: 1260, y: 120, icon: 'fa-balance-scale' },
  { x: 1360, y: 160, icon: 'fa-gavel' },
  // Row 2
  { x: 90,   y: 240, icon: 'fa-balance-scale' },
  { x: 290,  y: 275, icon: 'fa-landmark' },
  { x: 460,  y: 235, icon: 'fa-handshake' },
  { x: 630,  y: 295, icon: 'fa-briefcase' },
  { x: 810,  y: 255, icon: 'fa-user-tie' },
  { x: 990,  y: 315, icon: 'fa-file-alt' },
  { x: 1160, y: 275, icon: 'fa-newspaper' },
  { x: 1310, y: 300, icon: 'fa-gavel' },
  // Row 3
  { x: 70,   y: 400, icon: 'fa-newspaper' },
  { x: 250,  y: 440, icon: 'fa-balance-scale' },
  { x: 430,  y: 400, icon: 'fa-gavel' },
  { x: 610,  y: 460, icon: 'fa-user-tie' },
  { x: 790,  y: 420, icon: 'fa-landmark' },
  { x: 970,  y: 480, icon: 'fa-file-alt' },
  { x: 1150, y: 440, icon: 'fa-handshake' },
  { x: 1330, y: 465, icon: 'fa-briefcase' },
  // Row 4
  { x: 110,  y: 560, icon: 'fa-briefcase' },
  { x: 310,  y: 600, icon: 'fa-newspaper' },
  { x: 510,  y: 560, icon: 'fa-balance-scale' },
  { x: 710,  y: 620, icon: 'fa-gavel' },
  { x: 910,  y: 580, icon: 'fa-user-tie' },
  { x: 1110, y: 640, icon: 'fa-landmark' },
  { x: 1290, y: 600, icon: 'fa-handshake' },
  // Row 5
  { x: 130,  y: 720, icon: 'fa-landmark' },
  { x: 350,  y: 760, icon: 'fa-briefcase' },
  { x: 570,  y: 720, icon: 'fa-newspaper' },
  { x: 790,  y: 780, icon: 'fa-balance-scale' },
  { x: 1010, y: 740, icon: 'fa-gavel' },
  { x: 1190, y: 770, icon: 'fa-user-tie' },
];

const LINES = [
  [60,90,210,130],[210,130,390,100],[390,100,560,150],[560,150,730,110],
  [730,110,910,140],[910,140,1090,95],[1090,95,1260,120],[1260,120,1360,160],
  [90,240,290,275],[290,275,460,235],[460,235,630,295],[630,295,810,255],
  [810,255,990,315],[990,315,1160,275],[1160,275,1310,300],
  [70,400,250,440],[250,440,430,400],[430,400,610,460],[610,460,790,420],
  [790,420,970,480],[970,480,1150,440],[1150,440,1330,465],
  [110,560,310,600],[310,600,510,560],[510,560,710,620],[710,620,910,580],
  [910,580,1110,640],[1110,640,1290,600],
  [130,720,350,760],[350,760,570,720],[570,720,790,780],[790,780,1010,740],[1010,740,1190,770],
  // verticals
  [210,130,290,275],[390,100,460,235],[560,150,630,295],[730,110,810,255],
  [910,140,990,315],[1090,95,1160,275],
  [290,275,250,440],[460,235,430,400],[630,295,610,460],[810,255,790,420],[990,315,970,480],
  [250,440,310,600],[430,400,510,560],[610,460,710,620],[790,420,910,580],
  [310,600,350,760],[510,560,570,720],[710,620,790,780],[910,580,1010,740],
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
        {/* Connecting lines */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.25">
          {LINES.map(([x1,y1,x2,y2], i) => (
            <line
              key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              strokeDasharray="80 40"
              style={{
                animation: `flowLine ${6 + (i % 5)}s linear infinite`,
                animationDelay: `${-(i % 4) * 2}s`,
              }}
            />
          ))}
        </g>

        {/* Icons via foreignObject — uses Font Awesome which is already loaded */}
        {NODES.map((node, i) => (
          <foreignObject
            key={i}
            x={node.x - 14}
            y={node.y - 14}
            width="28"
            height="28"
            style={{ overflow: 'visible' }}
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
                fontSize: '18px',
                opacity: 0.7,
              }}
            >
              <i className={`fas ${node.icon}`}></i>
            </div>
          </foreignObject>
        ))}
      </svg>

      <style>{`
        @keyframes flowLine {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }
      `}</style>
    </div>
  );
}
