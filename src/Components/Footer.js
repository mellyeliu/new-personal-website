import React, { Component } from "react";
import TypingToggleTextList from "./TypingToggleTextList";
import { quotes } from "../Data/QuotesData";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
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
      <footer className={`${this.props.bottom ? "blog" : ""}`}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

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
  }
}

export default Footer;
