import './bongocat.scss';
import CatHead from './cat/CatHead';
import CatPawLeft from './cat/CatPawLeft';
import CatPawRight from './cat/CatPawRight';
import HeadPhoneLeft from './cat/HeadPhoneLeft';
import HeadPhoneRight from './cat/HeadPhoneRight';
import LabtopBase from './labtop/LabtopBase';
// import LabtopCover from "./labtop/LabtopCover";
import LabtopKeyboard from './labtop/LabtopKeyboard';
// import Terminal from "./labtop/Terminal";
import MusicLeft from './music/MusicLeft';
import MusicRight from './music/MusicRight';
import Table from './table/Table';
import Gamepad from './gamepad/GamePad';
import { useEffect, useMemo, useState } from 'react';
function App() {
  const [isGamepadConnected, setIsGamepadConnected] = useState<boolean>(false);
  const [keys, setKeys] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
  });

  useEffect(() => {
    function addGamepad(e: GamepadEvent) {
      if (e.gamepad.index === 0) {
        setIsGamepadConnected(true);
      }
    }
    function removeGamepad(e: any) {
      setIsGamepadConnected(false);
    }
    window.addEventListener('gamepadconnected', addGamepad);
    window.addEventListener('gamepaddisconnected', removeGamepad);
    return () => {
      window.removeEventListener('gamepadconnected', addGamepad);
      window.removeEventListener('gamepaddisconnected', removeGamepad);
    };
  }, []);

  useEffect(() => {
    let intervalId = 0;

    const updateStatus = () => {
      if (navigator.getGamepads()[0] === null) {
        return;
      }

      const pad = navigator.getGamepads()[0];
      if (pad === null) {
        return;
      }
      for (var i = 0; i < pad.buttons.length; i++) {
        let button = pad.buttons[i];
        if (button.pressed) {
          console.log(button.pressed, i);
        }
        // @ts-ignore
        if (button.pressed !== keys[i]) {
          // @ts-ignore
          setKeys({
            ...keys,
            [i]: button.pressed,
          });
          console.log(keys);
        }
      }
    };

    if (isGamepadConnected) {
      intervalId = window.setInterval(updateStatus, 50);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isGamepadConnected, keys]);
  const pressedkeys = useMemo(() => {
    return Object.keys(keys).filter((key) => {
      // @ts-ignore
      return keys[key];
    });
  }, [keys]);

  const leftPressed = useMemo(() => {
    return (
      pressedkeys.includes('12') ||
      pressedkeys.includes('13') ||
      pressedkeys.includes('14') ||
      pressedkeys.includes('15')
    );
  }, [pressedkeys]);

  const rightPressed = useMemo(() => {
    return (
      pressedkeys.includes('0') ||
      pressedkeys.includes('1') ||
      pressedkeys.includes('2') ||
      pressedkeys.includes('3')
    );
  }, [pressedkeys]);
  console.log(pressedkeys, leftPressed);
  return (
      <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 783.55 354.91">
          <g id="bongo-cat">
            <CatHead />
            <HeadPhoneRight />
            {/* <MusicRight /> */}
            <Table />
            {/* <LabtopBase /> */}
            {/* <LabtopKeyboard /> */}
            <Gamepad keys={keys} />
            <CatPawRight pressed={rightPressed}/>
            {/* <Terminal /> */}
            {/* <LabtopCover /> */}
            <CatPawLeft pressed={leftPressed} />
            <HeadPhoneLeft />
            {/* <MusicLeft /> */}
          </g>
        </svg>
      </div>
  );
}

export default App;
