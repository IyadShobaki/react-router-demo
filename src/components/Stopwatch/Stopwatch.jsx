import { useEffect, useState, useRef } from "react";
import "./Stopwatch.css";

function formatTime(s) {
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function Stopwatch() {
  const [isCounting, setIsCounting] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const toggle = () => setIsCounting((prev) => !prev);
  const reset = () => {
    setIsCounting(false);
    setSeconds(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isCounting) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isCounting]);

  return (
    <div className={`stopwatch ${isCounting ? "stopwatch__running" : ""}`}>
      <div className="stopwatch__text" aria-live="polite">
        {formatTime(seconds)}
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="stopwatch__btn"
          aria-pressed={isCounting}
          onClick={toggle}
        >
          {isCounting ? "Stop" : "Start"}
        </button>

        <button
          className="stopwatch__btn"
          onClick={reset}
          aria-label="Reset stopwatch"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
