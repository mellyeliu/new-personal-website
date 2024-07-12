import React from "react";
import TypingToggleTextList from "./TypingToggleTextList";

const NameTag = () => {
  return (
    <div
      style={{
        width: "320px",
        height: "100px",
        backgroundColor: "white",
        border: "0.5px solid #111",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        padding: "10px",
        boxSizing: "border-box",
        position: "absolute",
        left: "50%",
        top: "50px",
        transform: "translateX(-50%)",
        color: "#111",
        zIndex: 100000,
      }}
    >
      {/* <ul id="nav" className="nav">
                <li id="logo"> */}
      {/* <marquee> */}
      <div
        style={{
          fontWeight: 700,
          letterSpacing: 0.5,
          fontFamily: "Cormorant Garamond",
          fontSize: 22,
        }}
        className="control"
      >
        {"mellyeliu ໒ ꒰ྀིっ˕ -｡꒱ྀི১ ♡ "}
      </div>
      <TypingToggleTextList
        wrapper={true}
        className="control"
        // textOptions={funFacts}
        style={{
          letterSpacing: 1.4,
          fontFamily: "Cormorant Garamond",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: 14,
          paddingTop: 2,
          color: "rgb(150,150,150)",
        }}
      ></TypingToggleTextList>
      {/* </marquee> */}
      {/* </li>
            </ul> */}
    </div>
  );
};

export default NameTag;
