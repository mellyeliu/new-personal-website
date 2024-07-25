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
      <div style={elementStyle}>
        {" "}
        &nbsp; &nbsp; {formatTime(currentTime)}&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  padding: "10px",
  color: "black",
  cursor: "default",
  lineHeight: 0,
  top: 10,
  height: 10,
  fontWeight: "500",
};

const elementStyle = {
  // margin: "10px", // optional
  // padding: "10px",
  position: "absolute",
  right: 0,
  bottom: 0,
  lineHeight: "40px",
  // top: -14,
  // height: 15,
  borderLeft: "0.5px solid black",
};

export default Clock;
