import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  return (
    <div style={containerStyle}>
      <div style={elementStyle}> &nbsp; &nbsp; {formatTime(currentTime)}</div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  padding: "10px",
  color: "black",
  lineHeight: 0,
  top: 10,
  height: 10,
  fontWeight: "500",
};

const elementStyle = {
  margin: "10px", // optional
  padding: "10px",
  position: "absolute",
  right: 0,
  lineHeight: "20px",
  top: -18,
  height: 15,
};

export default Clock;
