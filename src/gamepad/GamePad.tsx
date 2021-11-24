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

const LargeKey: FC<{ x: number; y: number; fill: boolean }> = ({
  x,
  y,
  fill,
}) => {
  const dot1 = `${x + 40} ${y + 25}`;
  const dot2 = `${x + 10} ${y + 20}`;

  const dot3 = `${x + 20} ${y + 0}`;
  const dot4 = `${x + 50} ${y + 5}`;

  const points = `${dot1} ${dot2} ${dot3} ${dot4}`;
  
  return (
    <polygon
      points={points}
      style={{
        fill: fill ? "#569cfa" : undefined,
      }}
    />
  );
};

interface KeyProps {
  keys: {[key: number]: boolean;}
}

const GamePad:FC<KeyProps> = ({keys}) => {
  return (
    <g className="laptop-keyboard">
      <>
        {/* 위 */}
        <LargeKey x={468} y={300} fill={keys[12]} />
        {/* 아래 */}
        <LargeKey x={480} y={275} fill={keys[13]} />
        {/* 좌  */}
        <LargeKey x={510} y={292} fill={keys[14]} />
        {/* 우 */}
        <LargeKey x={440} y={280} fill={keys[15]} />
      </>
      <>
        {/* 세모 */}
        <LargeKey x={258} y={255} fill={keys[3]} />
        {/* 네모 */}
        <LargeKey x={300} y={247} fill={keys[2]} />
        {/* 동그라미 */}
        <LargeKey x={230} y={235} fill={keys[1]} />
        {/* 엑스 */}
        <LargeKey x={270} y={230} fill={keys[0]} />
      </>
    </g>
  );
};

export default GamePad;
