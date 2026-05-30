const nodes = [
  { x: 7, y: 17, icon: 1, size: 44 },
  { x: 20, y: 29, icon: 6, size: 38 },
  { x: 36, y: 18, icon: 8, size: 42 },
  { x: 52, y: 32, icon: 4, size: 46 },
  { x: 68, y: 18, icon: 3, size: 42 },
  { x: 86, y: 30, icon: 2, size: 44 },
  { x: 94, y: 15, icon: 5, size: 38 },
  { x: 12, y: 56, icon: 5, size: 42 },
  { x: 28, y: 68, icon: 7, size: 44 },
  { x: 44, y: 54, icon: 1, size: 46 },
  { x: 61, y: 70, icon: 6, size: 40 },
  { x: 78, y: 55, icon: 8, size: 45 },
  { x: 92, y: 73, icon: 4, size: 44 },
  { x: 5, y: 84, icon: 3, size: 38 },
  { x: 35, y: 90, icon: 2, size: 42 },
  { x: 70, y: 88, icon: 7, size: 40 },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [1, 7],
  [3, 9],
  [5, 11],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [7, 13],
  [8, 14],
  [10, 15],
];

export default function NetworkBackground() {
  return (
    <div className="community-bg" aria-hidden="true">
      <svg className="network-lattice" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to], index) => (
          <line
            key={`${from}-${to}-${index}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
          />
        ))}
      </svg>

      <div className="network-icons">
        {nodes.map((node, index) => (
          <span
            key={`${node.icon}-${index}`}
            className="network-icon"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              backgroundImage: `url(/network-icons/legal-icon-${node.icon}.png)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
