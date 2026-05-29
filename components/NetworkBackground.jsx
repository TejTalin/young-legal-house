export default function NetworkBackground() {
  const icons = {
  gavel: 'data:image/png;base64,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',
  person: 'data:image/png;base64,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',
  document: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEq0lEQVR42u1YW2wUVRj+zjmzszvbXdaGpOEWnhBwSyIhJXLT5WI0EcLbNLzxxgvGZ+OL9tHExMSIPmg0Pu+DREWbWJQJIARogsQuhmCBhYKs0NJ2uzM7c87/+9DpBQUtbdxKMl+y2c3Zs+ec779855sFEiRI8FRDLHQB13VVrVab8zodHR1cLpfN0x44+X/IgGBmbHn5tW6KoudNFJGBkRISAAGQICJIKeOpxAKCsvkl509//83XMQmOX/OGmmfdKFQqdLTvxM6g0XgPxJ9GFN1ijSoJqlLEVTJUZeIqCapC820ivmHIbA58/91lK1Y4tTtDfVMlWKlU5k3CWgj7MPALEuLyxfM/fTuX+es2blprSfVBLr+kWdy05ceQgu5yufxHqVSyPM/TLSPgAigDsO20BnMGrqswMKDQ2fnI5lwzPm5dzed1pno3F2ktz3jH3+na+uJh+MbbsWfvG97xY31xNZiWZkBrLWAMY0pVKpVHHmBlqSSu9vaa5sYupSNtAODCmZNHtm3b1TsyfP/zF3bsXHvutPcRM0810H+rBuX43RgNSDkn6QSAVEpVU7a9u7Nr68ebtu/+bCwMDksl7viRObL5pT2vAyDXdVXLSkgpC1L8O4Ep3b907uwX+7u7T0VE2RRS8BsNO5tLN24M1fqiKNwP4MNyudy6EgIUwA9VjSiVSo+NoBACAK7+dXzXK3u3+81AtVyFHgF+EjVxXdcuFov6wqXLbU2txaIQEDNtRPsPHFhx7bebh8IwFEQEAkHG30s5ebExMymlZL5Q+LlYLB7t6emhna/u88loWpwMzMRNUL3+wHHSx9vaHDmzgQVAA5YFrTVMs8nptjaRSWdvVyoVAQD3hofrTsbWi0KAeSZwltXuMPurR0fHRSqVmqRGJhZ3Axgg7WRpImjKyNemPds+CACrVy1fOjIyarecgLIA6FkqlAf4PjSMgYlzM3V8GANAwRCRZCHZVtMRD8Mw4nl6ogURMADUrNarjY6GYdB4kHbSEtakqNhGMDMLkRIsjOAw9CmISLanChOzQqHEPI2ltUARhZAz+y7lbHaEaF040TRKSQghpGVZkplJB6QETJsQgoiNDILmL8VicQAAiGjernThPUDT+4pMxozYVuar9RueLWSzWXW3VvMHfr0y8dyGNTkTqjGv98tbs39bcKQFgHh2I7W+iac/0v0GluVyzlvVm1WM1yfGDIyWipvXrlzPFJ4pPDh48O33r18/oQHA6+hg1GoAgEwmYzeb4WLcAwpSTQdP/nCsPATg0ONmXzx78uGBUskCAN/3A2bT+gwYbSDIiNgUStd1MTg4KH3f/1s0Hcfh/v7+h05Zr9cFAHlveLieSdt+ywiUp+10JBU4iC0wxUZszqHs7+8nAFi1cnn6zu9341SWBOC1xo3m8gU/Cv316zq7tkWRL1Iph7UwDB2vrCPASv2DABglpDLXqkOdOScd3wteCzIwaY/Fvl1bve9OnPrEEuKADi1S6bTQWgPTyuRAxjJL8ZiUABEgLQXSBtJSLBjNXC7z5qzrJflja86YfCCPU18qPWkFxIsA8Dx60sfJBAkSJEiQIEGCBAkSJHiq8SfJbkBe0mb8ZwAAAABJRU5ErkJggg==',
  newspaper: 'data:image/png;base64,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',
  court: 'data:image/png;base64,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',
  handshake: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAHOUlEQVR42u2Ya2wU1xmG33POzO5613ez5mIMFEhJ3UAQA9jYOBNooSoE4oqMU7UlSiGhadItguaiCjWOFVX5EZHUooqwWuIqTZ2007ThEqCFFMah3AxpxMUGESg4JMbLxfau9zYz55z+yBpBCsiAqdRon3+rXX0z3/ue837nLJAhQ4YMX2YIAAaAAgbLyHEN2B1UnsxesGBoUXFpw/DSUUsLCovZ+a7PDn/uBuRgPYgO5lvX1dVR6LqCsjIVAMLnLjS63I7o5dpSQfHqtx74zhQAUtd1Rdd1Jd3obSt1SxiGwcxwmOjpz5ZlSQC8v6gEUPWNuY+Ew+GQxxs4oHqUux6cc//C+vr6+JV1dF1XLABX1OE34xAZTAfmzq/RLvVG5hOFBVOJhJqIxwq9Hm92bm7eyZSd0hRKD6dsO+71+20iZdvKJx9/q7a21v6fOyClJOX6N394IXy+WPGoOR6fTwrXLQXwiD87u00KvqFk2PAjx0+c+O3o0pEvMcZYx6efzcjK8gcJyIeu6wxLJOLzCKEnCZFvu65DCKEJ5vG5Q4LB9S2b322vq6uj9fX1YvAbMAwG0+Rapf6raCwWKszLreFgSjIe4SC0Jze3kLqpWGLC1yec/fhEx4LeaG8oy+sLp1IJ4vMGXhSCewHXdVIirvjVgOQ8201x1x8IPBBPJR67f3p18Zo1L13o1+pOJAwNhULeMq3ibxOnV/17xqx5ldf74bDx44Oj75644d7pVU/pc+f95UZF75lasfGeqZWflN83a2H/Hhv0FEoXFbtaP3qcAt3BgoJF0Wj3a3V1dYqmaaphGMwwDIZ0wgwdOrSYUZKMJWJdKdvxGobBysrKPIZhMBgGKzMMDwA6tXr2UxIgo0eW1MSTzurGxkbVNE15J7KdNjRs9pZpFcemVepTAWBS+UxrWvWcR/sT5XKcAlj03cVT75qk/XXUhIkPVcyas+kas4fu2LFDmTS96tiseQvvSzvRMq169hMDdWHADui6zgCIdc2/XEGA9tbd1gEANOBRfx6N9j69bNky1bKsqzYdY4zk5+cFA36/j7uO+EJBBYBY/uyqH3PBO3Zu2dgCgA4fUfKM6/LQFS6QwWiAWJYllixZkiOEfCInkP08AKJpGtvzwY7dBPL03n8deQyAuFI1x3FAKZiqKpRzebWbliVWr16dJRldWZSXv0pKSTRNY9s2vLPPceyO19a9sQyASAt3ew30q3/w6PGfSc5b97ZsPwxdZ2PHjhUAaPGQIS9IQkKhUMhrmqZsa2sjAKCqClOo4lUUhRJK5BV7iQIQTW//eTkDOdLy/tZWQGfZ2dkSAB1SUPACCF3R0NDgTbtKbqcBYlkWD4VCuS4X3y8syn02PTJd0zQ5AGFt33IglUi0v79r35MAxNH0OlcVFYQQ4QhXSiHTL6ET0zRFU1OTTwr5aJ4365n0DHYty3IBiJ3bNu8DkUeb/vCnEACBG7igDCSpKCW8Zd+HjVwImkjJFyeVV3tdOyUYZZCEUEJBpYSajCd/oc+du8UyzeMA4MABF5wTQcRlDcvOU9JO3DW/eb2BMObrc+1VZZOnZTFF4Uz1AADhrkvtZJI6nD9XPWfBOx9s23g6Lba4hQYMCGECgp/wKsqoaq3qp6dOnRY9znlfPBaDl3NuGEbkd+Z6w3bcr/C42mUYBjVNk6tQwbmQAEDI5x2Mt23ysZRwuTzOKC2vnDJxZfu5c7YTjmUJHycBkus+/PC86NrX33wwlkh8tTSY03OjoTaAJWRyAPTQwX3Pu6576O87t/76k3Md4xCL9ezfuTNMAgFlXbP5o0hPdyi/IP8Hu3a91x2NRhXouiIZ9SRTdrQ3EnFAJE0nDwzDYIf3//MVCLF7e8vetfGuSNmYMcGelq1buy5eDLNX1jYt6YvFnvP4vN9rbm7uBurI9RogNzkH5OTpMx9yBV/g2LZP8XhdSuHzKJ7jw8aMePm95uZuTdPUgwcPOgDwkxUr7rV27XnZdrEmN8e/tLXlHzVXxahludqMmTWck0WxeFRVVG+KEviZoh4bVVzasGnTWxeut3Ru9Sx0uZimaWpXV5fy6dmziS9KM6VKr+i51D05kJsz3LadhY7j7PGo6pR4rO/3BfkF6qqnlzfW1tYm0kON36DeDV/+Vm5k0jAM1tbWRjs7O91IJOL2P7yzs1PWLF5cVFRU/O3unp43crIDTAjA6/GcpIRQKWUHU1iforDK/Qc+mj9uzLj2M2dOnb9GPaLrunLmzBk5kMPcYN0HFADu5Irq9Yyxr2X7/YcURZXxeCwVTyZTBHAVVfUUFwdPg4tLvdG++ZFotKqkZOTkre/+8eRAj863GqMDQQAAF+6bWYHsu5kniyeTfTSZsm3HdR2AgjBJLl3sLhQEIzyKp0VV1dZgyZAeAKivr78jx+b/m/9tBg/DYHo4fFVNyyqW6XGC//7u5u6/GTJkyJAhQ4YMGTJkyPCl4j8AnEQGdxi/9AAAAABJRU5ErkJggg==',
  briefcase: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFXElEQVR42u1XXWhcRRT+zszcvXs3SRNNo22jolWD9idNE1tba13T1vpXtbYu/jWGUkHxxYoP4oshKAqCD0UQQaH0oWgb8AdUorasKxpsbBt9SIsQUhWCmCimcbO5e+/MHB+yW2ObxixuFOR+sMzde8+ZmfPzzTkDRIgQIUKECGVDSgIQAGiGn0ilUjLyVQFUpnkEAXbpyut3WMF3EckJMOfzfo4dxwUEwBYAEBMkKuKJip6+nvQeZiYA/G8bQKlUShT/9PdD1tUN25wVN+RyE3tr5s3bVnlhlR4dHr2GBZOEpMAELGWM4p77fT7nZ0dPj75VWVn18uJF8w/090MuXQpTnK+rawkDnXauDDivxxqarrvdUbKt/+iRh5a1rP2Iwd9K6YyFYSCCMG8TVVXS+PktJ/p611yxrOnZy+rrkfn4w5dKXeefGEAA+LZ7H75k+OehZBBMkBCCHMcVRGSz4+NrjTG3VCQqng91+MaihQuf+GXk52EdhsKNx62Ukn4by+5PeN4zp0d/u6+mpmbCGP02sxBKKevnxjkWj2H+/AU9hz98Z3C2RlApkdra1nbhwHeDh3SQ/0AHepykEFIqBoBgYkKHJgwrEpVeLu9nKxLePBNaoXUeSrmwMNDGno45TiLUYSCEICFEDACUUuT7Psdd13Vdb3u1m7g9k+keKqzNZeBohwCADbfdveTq5c29c3mqNK5e9+XCy65sLh4OfyevZjdt52QYKNRCSoNkUiXPksgUxuL7kZGRcxavq6uzRdlz9LNZ4qNHuXnNeggp9WwNVqV4x1qHmJmQyejMeWQyf3pOz0TOafRJKcWNq9YBiqnMBnRMRsEFiGgm7nDhm71u48bFP/04UkfaWMdTFHdi4ye//bp/Bl3SWqNlXRJBOHunlpRC1rdkjNZ/QyxeuTbZlv/df/yiugv62Fon7nlhduz3q69tWp05+U3vi+fTk1Kiac16DQbNSQopJxYQ88UtmzZVH+vrO1Nsagvjr1orKKVd13mUAv7keE+ms5gzm7ds2z74w6ndqK19FbpSQmVN7dTdM9PWXbu4N/1FXZXn6ZGyF7KODtEB4INPMy9kc9ntgvm4cmJCOjEAFqGfh9YhuZ7HzFgdBkGupqr6dejxN5nce/LAbj/IL5DgI8YYcpTDBEBICQgio43x8/6SC+ZV9+5qe+CJxw4dsujqMuU73zomj9IVq25oWrJy9VfpdFodPHgwxsyKmVU6nVbt7e1xZlY3brr18E2bNj89VX3r/Q9vvnLpisPMrPbs+cgt6jGz2rt3b5yZVUNjc9cdW1M7ACCZTKqypxAAEItqoWTQ2tqqp6mWdt++fXbNzRu+HMvm7mxY3jzhOI5jrAkHBr9fH3PjJ4hIA7BPPomp/Q7v3LnTNDS2BIEOK0vqImcdgMIopTSFLnK6FGQA1Pt5+jkvFt/jui45jhO6MY+klO++9spXT03XIiSTSZo8pi0JErYkXs5WsLMwhtCg81OHJzfCONbz2ftnf2xtnZlyQhBEiVcdVUoEOgE4jsO+8S0ACbQIYPGUXQ1TsRxfNTR0zlYG6usNMhkGkgRcVIhCF4aGPAmkmHnAlprSJUfAAEpKmZh8PGaAY9OW44HpKvHAwFmNR/F1twEAkqvibK0oiZOlym7Z8mDtqaHBA0LJUwz4AMhqC8BCCDHJTGv/QjMu8tVOPgkAJOhMzkml2BojtdaN9YsufSTd/V6xnbblNOBML9Pe3h4/cvxkUxiGBAVoXQil+rMDOtf9Z/cHzpR3DjxP4fKLG/q7u/ePlXKh+S/v0WWZn/7BInNhCM+l5yNEiBAhQoQIESJEiPD/wh9bPzttc2V+QAAAAABJRU5ErkJggg==',
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
              opacity: 0.25; stroke-dasharray: 50 30;
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
              opacity="0.55"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
