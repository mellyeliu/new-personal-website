import React, { useContext } from "react";
import TypingToggleTextList from "./TypingToggleTextList";
import { quotes } from "../Data/QuotesData";
import { ThemeContext } from "../ThemeContext";

const Footer = (props) => {
  const { cursorString, setCursorString } = useContext(ThemeContext);

  const handleHoverChange = () => {
    if (cursorString !== "") {
      setCursorString("");
    } else {
      setCursorString("find me in other links!");
    }
  };

  if (props.data) {
    var networks = props.data.social.map(function (network) {
      return (
        <a href={network.url} key={network.name}>
          <li className="hvr-grow-big">
            <i className={network.className}></i>
          </li>
        </a>
      );
    });
  }

  return (
    <footer className={`${props.bottom ? "blog" : ""}`}>
      <div className="row">
        <div className="twelve columns">
          <ul
            className="social-links"
            onMouseEnter={handleHoverChange}
            onMouseLeave={handleHoverChange}
          >
            {networks}
          </ul>

          <ul className="copyright">
            <li>
              <TypingToggleTextList
                className="control"
                textOptions={quotes}
                wrapper={true}
                speed={35}
                autoplaySpeed={15000}
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
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
