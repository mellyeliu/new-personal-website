import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import TypingToggleTextList from "./TypingToggleTextList";
import { useTheme } from "../ThemeContext";

const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      id="nav-wrap"
      className={`opaque ${theme === "dark" ? "themelight" : "themelight"}`}
      style={{ zIndex: 100000 }}
    >
      <div>
        <ul id="nav" className="nav">
          <Fade duration={2000}>
            <li id="logo">
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
                {"mellyeliu  ໒ ꒰ྀིっ˕ -｡꒱ྀི১ ♡ "}
              </div>
              <TypingToggleTextList
                wrapper={true}
                className="control"
                // textOptions={funFacts}
                style={{
                  letterSpacing: 2,
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: 14,
                  paddingTop: 2,
                  color: "rgb(150,150,150)",
                }}
              ></TypingToggleTextList>
              {/* </marquee> */}
            </li>
          </Fade>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
