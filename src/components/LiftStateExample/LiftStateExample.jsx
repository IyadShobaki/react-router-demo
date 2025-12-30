import { useState } from "react";
import "./LiftStateExample.css";

function LiftStateExample() {
  const [size, setSize] = useState(0);

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  return (
    <div className="LiftState">
      <Slider onChange={handleSizeChange} size={size} />
      <Bubbles size={size} />
    </div>
  );
}

function Slider(props) {
  return (
    <div id="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={props.size}
        onChange={props.onChange}
      />
      <div className="counter">{props.size}</div>
    </div>
  );
}

function Bubbles(props) {
  // The easiest way to render RandomBubble 20 times in a row:
  return Array.from(Array(20), (_, i) => (
    <RandomBubble key={i} size={props.size} />
  ));
}

function RandomBubble(props) {
  // Use state to store the initial parameters on the first render
  const [initialStyle] = useState({
    top: getRandomInt(0, document.body.offsetHeight),
    left: getRandomInt(0, document.body.offsetWidth),
    backgroundColor: `#${getRandomInt(0, 256 ** 3 - 1).toString(16)}`,
  });
  const [initialScale] = useState(getRandomInt(1, 10) / 20);

  return (
    <div
      className="bubble"
      style={{
        ...initialStyle,
        // Multiply the initial scale by the value of props.size, or by 0, if props.size is not specified
        transform: `scale(${initialScale * (props.size || 0)})`,
      }}
    />
  );
}

// Return a random number within a specified range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default LiftStateExample;
