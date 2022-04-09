import { useEffect, useState } from "react";

const microphoneInit = (onChageVolume: any) => {
  if (navigator.mediaDevices) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        const audioContext = new AudioContext();
        const mediaStreamAudioSourceNode =
          audioContext.createMediaStreamSource(stream);
        const analyserNode = audioContext.createAnalyser();
        mediaStreamAudioSourceNode.connect(analyserNode);

        let pcmData = new Float32Array(analyserNode.fftSize);
        const onFrame = () => {
          analyserNode.getFloatTimeDomainData(pcmData);
          let sumSquares = 0.0;
          //  @ts-ignore
          for (const amplitude of pcmData) {
            sumSquares += amplitude * amplitude;
          }
          //  volumeMeterEl.value = Math.sqrt(sumSquares / pcmData.length);
          pcmData = new Float32Array(analyserNode.fftSize);
          onChageVolume(Math.sqrt(sumSquares / pcmData.length) * 10);
        };

        setInterval(onFrame, 100);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
};

const CatHead = () => {
  const [saying, setSaying] = useState(false);

  // TODO: 초기화 코드 작성 필요, microphoneInit 함수 안에 setInterval 초기화가 필요하다.
  useEffect(() => {
    microphoneInit((volume: number) => {
      setSaying(volume > 0.5);
    });
  }, []);

  return (
    <g className="head">
      <path
        d="M280.4,221l383.8,62.6a171.4,171.4,0,0,0-9.2-40.5,174,174,0,0,0-28.7-50.5,163.3,163.3,0,0,0,3.2-73.8c-11.6-1.9-42,14.2-44.5,17.5-19.6-24-88.5-52.7-153.7-48.1A78.8,78.8,0,0,0,398,67.1c-9.8,2.9-19,29.7-19.4,33.7a320,320,0,0,0-31.7,23.6c-14,11.8-28.9,24.4-42.5,44.3A173,173,0,0,0,280.4,221Z"
        fill="rgb(24,26,39)"
      ></path>
      {/* 노란색 : 255 202 125 */}
      {/* 발바닥색 : 252,55,207 */}
      {saying && (
        <path
          d="M408 189, 416 198, 428 193, 422 185, Z"
          stroke="rgb(252,55,207)"
          fill="rgb(252,55,207)"
        ></path>
      )}

      <path
        d="M396.6,178.6c.4.9,2.7,6.5,8.5,8.4s13.4-1.2,17.2-7.9c-.9,7.5,3.8,14.3,10.4,16a14.4,14.4,0,0,0,15-5.7"
        fill="rgb(24,26,39)"
      ></path>
      <path d="M474,179.2a6.6,6.6,0,0,0-4.9,3.6,6,6,0,0,0,1.5,7.3,6,6,0,0,0,7.9-1c2.3-2.6,2-7,.2-8s-5.9,1.6-5.7,3.5,1.9,2.8,3.2,2.3,1.1-2.2,1.1-2.3"></path>
      <path d="M365.4,168.9c0,.3-.8,3.6,1.5,6a5.9,5.9,0,0,0,7.2,1.4,6.1,6.1,0,0,0,2.2-7.7c-1.5-3.1-5.7-4.5-7.3-3.2s-.8,6,1,6.6,3.3-.7,3.3-2.1-1.5-1.8-1.6-1.9"></path>
    </g>
  );
};

export default CatHead;

// 252 55 207
