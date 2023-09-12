import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const NumericInput = ({
  initialValue,
  maxValue,
  onValueChange,
  disabled,
  title,
}) => {
  const [count, setCount] = useState(initialValue);
  const [intervalId, setIntervalId] = useState(null);
  const [isDelayed, setIsDelayed] = useState(false);
  const delayTimeoutRef = useRef(null);

  const increment = () => {
    setCount((prevCount) =>
      maxValue !== undefined && prevCount >= maxValue
        ? prevCount
        : prevCount + 1
    );
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleMouseDown = (action) => {
    setIsDelayed(true);
    delayTimeoutRef.current = setTimeout(() => {
      const id = setInterval(() => {
        if (action === "increment") {
          increment();
        } else {
          decrement();
        }
      }, 30);
      setIntervalId(id);
    }, 500);
  };

  const handleMouseUp = () => {
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
    }
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsDelayed(false);
  };

  const handleClick = (action) => {
    if (!isDelayed) {
      if (action === "increment") {
        increment();
      } else {
        decrement();
      }
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      let parsedValue = parseInt(newValue, 10) || 0;
      if (maxValue !== undefined && parsedValue > maxValue) {
        parsedValue = maxValue;
      }
      setCount(parsedValue);
    }
  };

  useEffect(() => {
    if (onValueChange) {
      onValueChange(count);
    }
  }, [count, onValueChange]);

  useEffect(() => {
    return () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className={`numeric ${disabled ? "disabled" : ""}`}>
      <button
        className="numeric-btn minus"
        onMouseDown={() => handleMouseDown("decrement")}
        onMouseUp={handleMouseUp}
        onClick={() => handleClick("decrement")}
      >
        -
      </button>
      <input
        className="numeric-input"
        type="text"
        value={count}
        onChange={handleInputChange}
      />
      {title && <div className="numeric-info">{title}</div>}
      <button
        className="numeric-btn plus"
        onMouseDown={() => handleMouseDown("increment")}
        onMouseUp={handleMouseUp}
        onClick={() => handleClick("increment")}
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
