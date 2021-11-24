import { FC } from "react";

const Key: FC<{ x: number; y: number; fill: boolean }> = ({ x, y, fill }) => {
  const points = `${x + 20} ${y + 15} ${x + 8} ${y + 12} ${x + 15} ${y + 9} ${
    x + 29
  } ${y + 12} `;
  // 13 15 8 12 15 9 29 12
  // 424 312 374 301 385 299 437 309
  return (
    <polygon
      points={points}
      style={{
        fill: fill ? "#569cfa" : undefined,
      }}
    />
  );
};

const LabtopKeyboard = () => {
  return (
    <g className="laptop-keyboard">
      {/* <polygon points="369.6 265.6 255.3 244.3 255.5 243.5 264.7 241.9 380.9 262.3 380.8 263.1 369.6 265.6"></polygon>
      <polygon points="235.9 256.4 219.8 253.2 219.9 252.5 228.7 251 245.3 253.4 245.1 254.2 235.9 256.4"></polygon>
      <polygon points="473.1 303.7 248.4 258.9 248.6 258.1 257.7 256.6 486.2 300.4 486 301.3 473.1 303.7"></polygon>
      <polygon points="410.3 300.2 202.7 257.5 202.9 256.8 211.4 255.3 422.4 297.1 422.2 298 410.3 300.2"></polygon>
      <polygon points="448.5 308.1 427 303.7 427.3 302.8 439.2 301.4 461.2 304.9 461 305.8 448.5 308.1"></polygon>
      <polygon points="200.1 264.7 186 261.7 186.2 261 194.5 259.5 208.9 261.8 208.8 262.5 200.1 264.7"></polygon>
      <polygon points="221.1 269.1 206.6 266.1 206.8 265.3 215.4 263.9 230.3 266.2 230.1 267 221.1 269.1"></polygon>
      <polygon points="361.4 298.9 230 271 230.2 270.3 239.2 268.9 372.7 295.9 372.5 296.7 361.4 298.9"></polygon>
      <polygon points="442.8 279.2 383.7 268.2 383.9 267.3 395.1 265.7 455.4 275.9 455.2 276.7 442.8 279.2"></polygon>
      <polygon points="524.6 294.4 458.6 282.1 458.8 281.2 471.3 279.7 538.6 291 538.4 291.9 524.6 294.4"></polygon> */}
      <Key x={400} y={280} fill={false} />
      <Key x={300} y={180} fill={true} />
      <Key x={200} y={170} fill={false} />
      <Key x={400} y={280} fill={true} />
      {/* <polygon points="409.1 277.3 397.6 278.8 397.4 279.6 498.4 299.1 511.8 296.7 512 295.8 409.1 277.3"></polygon>
      <polygon points="394.2 274.5 394.4 273.6 246.7 246.5 237.7 248.1 237.5 248.8 382.8 276.8 394.2 274.5"></polygon> */}
    </g>
  );
};

export default LabtopKeyboard;
