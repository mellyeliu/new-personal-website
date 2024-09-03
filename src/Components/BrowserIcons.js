import React, { useState } from "react";

const BrowserIcons = ({ setDesktopScreen }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleClick = () => {
    window.location.reload();
    setDesktopScreen(Screen.HOME);
    // console.log("Red circle clicked!");
  };

  return (
    <span className="browsero" style={{ cursor: "pointer" }}>
      {/* <span>○ ○ </span> */}
      <span
        style={{
          cursor: "pointer",
          display: "inline-block",
          position: "relative",
          width: "16px", // Size matching the character
          height: "16px",
          textAlign: "center",
          lineHeight: "16px",
          cursor: "not-allowed",
          marginRight: "5px",
          // color: hovered ? "transparent" : "black",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        // onClick={handleClick}
      >
        ○
        {hovered && (
          <span
            style={{
              content: "",
              position: "absolute",
              top: 3,
              left: 2.5,
              cursor: "not-allowed",
              width: "65%",
              height: "65%",
              borderRadius: "50%",
              backgroundColor: "#1ac95a",
              opacity: 1,
              zIndex: -1,
            }}
          />
        )}
      </span>
      <span
        style={{
          display: "inline-block",
          position: "relative",
          width: "16px", // Size matching the character
          height: "16px",
          cursor: "not-allowed",
          textAlign: "center",
          lineHeight: "16px",
          marginRight: "5px",
          // color: hovered ? "transparent" : "black",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        // onClick={handleClick}
      >
        ○
        {hovered && (
          <span
            style={{
              content: "",
              position: "absolute",
              top: 3,
              left: 2.5,
              width: "65%",
              height: "65%",
              borderRadius: "50%",
              backgroundColor: "orange",
              opacity: 1,
              zIndex: -1,
            }}
          />
        )}
      </span>
      <span
        style={{
          cursor: "pointer",
          display: "inline-block",
          position: "relative",
          width: "16px", // Size matching the character
          height: "16px",
          textAlign: "center",
          lineHeight: "16px",
          // color: hovered ? "transparent" : "black",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        ○
        {hovered && (
          <span
            style={{
              content: "",
              position: "absolute",
              top: 3,
              left: 2.5,
              width: "65%",
              height: "65%",
              borderRadius: "50%",
              backgroundColor: "#d42905",
              opacity: 1,
              zIndex: -1,
            }}
          />
        )}
      </span>
    </span>
  );
};

export default BrowserIcons;
