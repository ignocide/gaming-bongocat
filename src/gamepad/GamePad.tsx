import { FC } from "react";

// const Key: FC<{ x: number; y: number; fill: boolean }> = ({ x, y, fill }) => {
//   const points = `${x + 20} ${y + 15} ${x + 8} ${y + 12} ${x + 15} ${y + 9} ${
//     x + 29
//   } ${y + 12} `;
//   // 13 15 8 12 15 9 29 12
//   // 424 312 374 301 385 299 437 309
//   return (
//     <polygon
//       points={points}
//       style={{
//         fill: fill ? "#569cfa" : undefined,
//       }}
//     />
//   );
// };

const LargeKey: FC<{ x: number; y: number; fill: boolean; text: string }> = ({
  x,
  y,
  fill,
  text,
}) => {
  const width = 60;
  const height = 40;
  const dot1 = `${x + 0} ${y + 0}`;
  const dot2 = `${x + width} ${y + 0}`;

  const dot3 = `${x + width} ${y + height}`;
  const dot4 = `${x + 0} ${y + height}`;

  const points = `${dot1} ${dot2} ${dot3} ${dot4}`;

  return (
    <svg>
      <polygon
        points={points}
        stroke-width="1"
        style={{
          fill: fill ? "#569cfa" : undefined,
        }}
      />
      <text
        x={x + width / 2}
        y={y + 30}
        text-anchor="middle"
        fill="white"
        fontSize="30"
      >
        {text}
      </text>
    </svg>
  );
};

const LongKey: FC<{ x: number; y: number; fill: boolean; text: string }> = ({
  x,
  y,
  fill,
  text,
}) => {
  const width = 60;
  const height = 30;
  const dot1 = `${x + 0} ${y + 0}`;
  const dot2 = `${x + width} ${y + 0}`;

  const dot3 = `${x + width} ${y + height}`;
  const dot4 = `${x + 0} ${y + height}`;

  const points = `${dot1} ${dot2} ${dot3} ${dot4}`;

  return (
    <svg>
      <polygon
        points={points}
        stroke-width="1"
        style={{
          fill: fill ? "#569cfa" : undefined,
        }}
      />
      <text
        x={x + width / 2}
        y={y + 20}
        text-anchor="middle"
        fill="white"
        fontSize="20"
      >
        {text}
      </text>
    </svg>
  );
};

interface KeyProps {
  keys: { [key: number]: boolean };
}

// rotate3d(1,1,3,372deg) translateY(-45%)
const GamePad: FC<KeyProps> = ({ keys }) => {
  return (
    <g className="laptop-keyboard">
      <>
        {/* 위 */}
        <LargeKey x={200} y={260} fill={keys[12]} text={"상"} />
        {/* 아래 */}
        <LargeKey x={200} y={310} fill={keys[13]} text={"하"} />
        {/* 좌  */}
        <LargeKey x={130} y={310} fill={keys[14]} text={"좌"} />
        {/* 우 */}
        <LargeKey x={270} y={310} fill={keys[15]} text={"우"} />
      </>
      <>
        {/* 세모 */}
        <LargeKey x={400} y={260} fill={keys[3]} text={"△"} />
        {/* 네모 */}
        <LargeKey x={400} y={310} fill={keys[2]} text={"□"} />
        {/* 동그라미 */}
        <LargeKey x={470} y={260} fill={keys[1]} text={"○"} />
        {/* 엑스 */}
        <LargeKey x={470} y={310} fill={keys[0]} text={"Ｘ"} />
      </>

      <>
        {/* r1 */}
        <LongKey x={400} y={220} fill={keys[5]} text={"R1"} />
        {/* r2 */}
        <LongKey x={470} y={220} fill={keys[7]} text={"R2"} />
        {/* l */}
        <LongKey x={160} y={220} fill={keys[4]} text={"L1"} />
        {/* l */}
        <LongKey x={230} y={220} fill={keys[6]} text={"L2"} />
      </>
    </g>
  );
};

export default GamePad;
