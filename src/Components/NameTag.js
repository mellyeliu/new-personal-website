import React from "react";
import TypingToggleTextList from "./TextList";

const styles = {
  container: {
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
  },
  title: {
    fontWeight: 700,
    letterSpacing: 0.4,
    fontFamily: "Cormorant Garamond",
    fontSize: 22,
  },
  funFacts: {
    letterSpacing: 1.3,
    fontFamily: "Cormorant Garamond",
    fontWeight: 300,
    fontStyle: "italic",
    fontSize: 14,
    paddingTop: 2,
    color: "rgb(150,150,150)",
  },
};

const NameTag = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title} className="control">
        {"mellyeliu ໒ ꒰ྀིっ˕ -｡꒱ྀི১ ♡ "}
      </div>
      <TypingToggleTextList
        wrapper={true}
        className="control"
        style={styles.funFacts}
      ></TypingToggleTextList>
    </div>
  );
};

export default NameTag;
