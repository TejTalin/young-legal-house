export default function NetworkBackground() {
  const icons = {
  gavel: 'data:image/png;base64,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',
  person: 'data:image/png;base64,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',
  document: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEGUlEQVR42u2Y24tbVRTGf2vvk8zFZECmdmYyiODlD9C2o5R2HFAQFEEqQxmkanHUFkVRKuJDHwQR+qBChQq+6oO1lL4IUvHyplVa2xf1RWWqUJVWHwYZczl7bR/OJSdm0skkc6FyNoSEZCd7fVnr+761tnjvPdfwMlzjKweQA+hzBZ0+8N4jIkQU78xzVc3szewTgWX0QUQwZvX/m4gs/34nFVpJnDr9YDfLObdqEJ3OC3oNQlURMXzy+Rd89/0PFIIAp0r2GA8IAkQZCsOQbXfczt27dqKqUQ2LwePXvoRWCt5ay9dnv+Xtd97l0HPPxMHSLCVJEAgudBSLBU5/+hmPPvEUzx54kpdeeL7nbKxJBgAWFxe5+aYbmZne1dX+H3/+iQPz+xkpj/DY/EHeOPIaW0ZHCcMQa+3Gq1ChUCB0iqpSrzdwzi37qNXrqCqNhsMjPD2/n/vvu5fH5w9y7vwFgrj8NhyAquJciDEGaw3GLP+w8XOtVkWdA2Dv7MMcO/ombx09xomTpwispZeupq8S8t5jxDRVKyFChzVZqfDRx6d59fUjhKoMDQywZfR6XnzlMKF65mb3EIYOa836AcjKmQCSJWCH4AMb4L3noQcf4M4d26jV6iBCrVqlXC4xNbWDL8+cYW52z1U9Z00AZNMsJmte0WtdoZYnK5W298qlEoUg2HgVamplZLxJzXe7EvVxzrVmcuMAJEYVldLly1d4//gJBHDqUk4IkvqDCPxTrTK1fTv3zEynJem9bjyAyLDiAFQpl0vs3nlXBEuaDpwA8R5UHd57JsbHU0MUuSr31w+A/IcT1WqNS7//gVeHMTajTh6Px3sIgoB6o4G1AZWJ8XgPqN8EAIgkCUi7zMBatIXkQholYI3FGm0hrYhsTgbaZFVgeGgoInImKO89xghiLC4MKdbrDA4OtDR9vRZR3wCafIB6vcHCxV9SJUrmBGMMYRjy99IS1hiWlpZAhNtuvaWr1n1dATTP9oyMlJmZ3o2LiWqNSdvoUqnE+NjWNhkNggDTB4v7BODTAjDGcOXPv3jvg+NoGPVHxkYAqtUak5UK+/c9gonNLymzNFObo0KCxL2QqjK29QYOv3yoKxePZgFtcfFNKSEXhqhGLbUH1GlzFostgAwXUvWKzUs18guzGU7cCEOCQtDaQqxiMEm+MzQ02PM80BeA64aH+fXSb5w7f4FGIyIk+LimpW3WTSU3dmbnHAPFIl99c5aBYjGrqd2Xca+3EkkGPjx5ioWFi9HQYgOcc2kU6VAvTblKeiJjDKpRb2SsZd/cXibGx1LpzTaK63Kt0u/VymrPXPNrleRAF4+IK+1bCayJPWPDVWi524S2W7q2z3oo9tVyIL/czQHkAHIAOYAcQA4gB5ADyAHkAP73AP4FXy/lHlVbZVkAAAAASUVORK5CYII=',
  newspaper: 'data:image/png;base64,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',
  court: 'data:image/png;base64,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',
  handshake: 'data:image/png;base64,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',
  briefcase: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFH0lEQVR42u2Za4hUZRjHf+/7np0Zx9U1w9WsDFJ2VxEvmGUJpml2oTSExMiotBQzMiQxgsAvgVAQQRciw0BLFAqsxEINu3pbdy1TCz90oVVS090tN/ec875PH+bMmdnd2cvobiTNCwfmzJn38n+e5/9/nueMEhHhMh6ay3yUAJQA/N8BeJ09+C+Kk1KqFEJtLdLu3lobe05E4guJ3YqIYK3tPa90lsguJoQKubirEFUKitmm0Ppeb1hBRNBas/WjbXy6cxcDKypIJBIEvo8xJnZXGFiampqYesvNLFxwP865okAXReKuDuucy5xIgTiH1praunpef+ttXnlxLclEkh+PH0dphVY6CpuQ664dQapfiqdWPcugioHcNXsWobXoGIRCa1UUKK87l7UJJQGtNVrnUSeycFNzM+PHjaWmuooly59mxIhrqKyspLW1FcQhKN7ZuInNG9Zz+23TOdfYiDEm56GLDF+vO2sjObYqrfj91Gn27j+AygJUUGY89h44QP2h7/hw23b2Haxl7r13U55O4wcBnpfZZv2Gd9m05X2+3rOXyiFDuGLQIIIgoMzzsM7irOPGyZO4evjwHoPoEYkzhFM0N//Jo8ue5IaJE6gYMAAXxb5IBqM2CmcdiUSCVt/HWotzFqMNgpBOp/H9AGM0CkUQBKBAa4O1Ib4f8M2+/bz28ksMrRwS7avJytglkVgpxbnGRpy1PLdqZZ/p+qHFSzl58iTDhlZGJJfeI7ExmjLPi63YmYqIgIjraAStUeTSQv7MrDeVUhjP6xsVEgHrHMZojDFtydxBVjsu3ZVs6hhALnx7okZecYkqq0y5TJvdJPs5mxN+/a2BEydO4BkPJ8LAAeXUVFdFEhytk7VK5JXMwVWe6AkK1XsAnMtkT88zHSyU/ayUYuvH23hvyweMGzuGMAjp1z/N94ePMOWmyTyxZHHbUqSdlY0xOQGRAvXKpQDwPI8//jjL2XONeJ7BWhvLKUoRBiGJZIJPduxi2tQpLF/6eDx39xdf8eqb63jogfkEQZhLcmQ8qZXG8wynz5yhrKysd0NIKYV1juFXDWPe3DnMW/AgkyaMxwmxxgeBTxiG9Eun+ennXzh29AeuHDyY++bcw+7Pv+SNdev5q6WFNS+sJfADvDIPpVQcSkYbDtbVMWP6rYyursI6l5ehu05WBYdzrs0VhqGIiBw5ekzmL3wk/s5aJ9ZasdaK7/siIrLimdWycdPmNuvV1tXLgocXiYgUmBeIiMiyFStl52e749+0P0OhUVQeADjf0kIqlcqL+Uw055cdo6ur2L5jFwBhaEkkytizv5aaquqc6mgFRHMiQ6dSKc6fb+mbYi57OGNMrCT5DMtKpIiw9LFFjBo5ioaGBpLJJGEYcMfMGdw5e1YbtWrfV9gwRBvdNwDyc0G+rBaq1UWEmTOmddEHqE69XGx1XTQArRVK66jOEbRWBQsva11ezs2gNVpTqIux1saE7k73LxmAtRY/alQKVMJ5klucPAMEYUgYtZs9raiLIrGIMGrk9aSSSVY/v4YB/ctx4iJDSy6m8rJrfi8hSOZZbO2o7DAeFy78zalTp5k4flyUzXvmiaJ64myZ4Ps+9d8ezuh0HiEzsS2dWFA6eSUQkdoJY0bXUF7eHxd1ee3PUIg7RTf1WRB9Nboq+HqlqVdK4ZzrpmNS7Syed69ULuQKqlBxJO6l1yqq4IH+jTdzqvQHRwlACUAJQAlACUAJQAlACUAJQAnAxY5/AO6W9uOeYvCSAAAAAElFTkSuQmCC',
  scales: 'data:image/png;base64,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',
  };

  const nodes = [
    { x: 70, y: 85, icon: 'gavel' },
    { x: 250, y: 85, icon: 'person' },
    { x: 430, y: 85, icon: 'document' },
    { x: 610, y: 85, icon: 'newspaper' },
    { x: 790, y: 85, icon: 'court' },
    { x: 970, y: 85, icon: 'handshake' },
    { x: 1150, y: 85, icon: 'briefcase' },
    { x: 1330, y: 85, icon: 'scales' },
    { x: 160, y: 215, icon: 'document' },
    { x: 340, y: 215, icon: 'newspaper' },
    { x: 520, y: 215, icon: 'court' },
    { x: 700, y: 215, icon: 'handshake' },
    { x: 880, y: 215, icon: 'briefcase' },
    { x: 1060, y: 215, icon: 'scales' },
    { x: 1240, y: 215, icon: 'gavel' },
    { x: 70, y: 345, icon: 'court' },
    { x: 250, y: 345, icon: 'handshake' },
    { x: 430, y: 345, icon: 'briefcase' },
    { x: 610, y: 345, icon: 'scales' },
    { x: 790, y: 345, icon: 'gavel' },
    { x: 970, y: 345, icon: 'person' },
    { x: 1150, y: 345, icon: 'document' },
    { x: 1330, y: 345, icon: 'newspaper' },
    { x: 160, y: 475, icon: 'briefcase' },
    { x: 340, y: 475, icon: 'scales' },
    { x: 520, y: 475, icon: 'gavel' },
    { x: 700, y: 475, icon: 'person' },
    { x: 880, y: 475, icon: 'document' },
    { x: 1060, y: 475, icon: 'newspaper' },
    { x: 1240, y: 475, icon: 'court' },
    { x: 70, y: 605, icon: 'gavel' },
    { x: 250, y: 605, icon: 'person' },
    { x: 430, y: 605, icon: 'document' },
    { x: 610, y: 605, icon: 'newspaper' },
    { x: 790, y: 605, icon: 'court' },
    { x: 970, y: 605, icon: 'handshake' },
    { x: 1150, y: 605, icon: 'briefcase' },
    { x: 1330, y: 605, icon: 'scales' },
    { x: 160, y: 735, icon: 'document' },
    { x: 340, y: 735, icon: 'newspaper' },
    { x: 520, y: 735, icon: 'court' },
    { x: 700, y: 735, icon: 'handshake' },
    { x: 880, y: 735, icon: 'briefcase' },
    { x: 1060, y: 735, icon: 'scales' },
    { x: 1240, y: 735, icon: 'gavel' },
  ];

  const connections = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
    [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],
    [15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],
    [23,24],[24,25],[25,26],[26,27],[27,28],[28,29],
    [30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],
    [38,39],[39,40],[40,41],[41,42],[42,43],[43,44],
    [0,8],[1,8],[1,9],[2,9],[2,10],[3,10],[3,11],[4,11],[4,12],[5,12],[5,13],[6,13],[6,14],[7,14],
    [8,15],[8,16],[9,16],[9,17],[10,17],[10,18],[11,18],[11,19],[12,19],[12,20],[13,20],[13,21],[14,21],[14,22],
    [15,23],[16,23],[16,24],[17,24],[17,25],[18,25],[18,26],[19,26],[19,27],[20,27],[20,28],[21,28],[21,29],[22,29],
    [23,30],[23,31],[24,31],[24,32],[25,32],[25,33],[26,33],[26,34],[27,34],[27,35],[28,35],[28,36],[29,36],[29,37],
    [30,38],[31,38],[31,39],[32,39],[32,40],[33,40],[33,41],[34,41],[34,42],[35,42],[35,43],[36,43],[36,44],[37,44],
  ];

  return (
    <div className="community-bg" id="communityBg">
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <style>{`
            @keyframes dashFlow { to { stroke-dashoffset: -90; } }
            .net-line {
              stroke: currentColor; stroke-width: 1; fill: none;
              opacity: 0.28; stroke-dasharray: 50 30;
              animation: dashFlow 9s linear infinite;
            }
            .net-line:nth-child(3n+1) { animation-duration: 7s; animation-delay: -1s; }
            .net-line:nth-child(3n+2) { animation-duration: 11s; animation-delay: -4s; }
            .net-line:nth-child(3n)   { animation-duration: 8s; animation-delay: -7s; }
          `}</style>
        </defs>

        <g>
          {connections.map(([a, b], i) => (
            <line key={i} className="net-line"
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
            />
          ))}
        </g>

        <g>
          {nodes.map((node, i) => (
            <image
              key={i}
              href={icons[node.icon]}
              x={node.x - 16}
              y={node.y - 16}
              width="32"
              height="32"
              opacity="0.5"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
