const nodes = [
  { x: 8, y: 18, icon: 'fa-scale-balanced' },
  { x: 22, y: 33, icon: 'fa-file-lines' },
  { x: 38, y: 17, icon: 'fa-gavel' },
  { x: 54, y: 34, icon: 'fa-landmark' },
  { x: 70, y: 18, icon: 'fa-handshake' },
  { x: 88, y: 32, icon: 'fa-briefcase' },
  { x: 14, y: 60, icon: 'fa-newspaper' },
  { x: 31, y: 76, icon: 'fa-users' },
  { x: 49, y: 62, icon: 'fa-scale-balanced' },
  { x: 66, y: 78, icon: 'fa-file-contract' },
  { x: 84, y: 60, icon: 'fa-gavel' },
  { x: 94, y: 82, icon: 'fa-landmark' },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 7],
  [3, 8],
  [5, 10],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
];

export default function NetworkBackground() {
  return (
    <div className="community-bg" aria-hidden="true">
      <svg className="network-web" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to], index) => (
          <line
            key={`${from}-${to}-${index}`}
            className="network-line"
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
          />
        ))}
      </svg>

      <div className="network-symbol-layer">
        {nodes.map((node, index) => (
          <span
            key={`${node.icon}-${index}`}
            className="network-symbol"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <i className={`fas ${node.icon}`}></i>
          </span>
        ))}
      </div>
    </div>
  );
}
