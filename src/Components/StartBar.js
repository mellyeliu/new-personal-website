import React from "react";
import PortfolioData from "../Data/PortfolioData";
import Clock from "./Clock";

const StartBar = ({ setDesktopScreen, desktopScreen }) => {
  const tabStyle = {
    padding: "0px 10px",
    marginLeft: 10,
    // margin: 5,
    // border: "0.5px solid black",
    // borderRadius: 5,
    color: "black",
    fontWeight: "500",
    fontStyle: "italic",
    // background: "#e4e4e4",
    cursor: "pointer",
  };

  var networks = PortfolioData.main.social.map(function (network) {
    return (
      <a href={network.url} key={network.name}>
        <li
          style={{
            color: "#222222",
            padding: "2px 10px",
          }}
          className="hvr-grow-big"
        >
          <i className={network.className}></i>
        </li>
      </a>
    );
  });

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 110000000000000,
        background: "#dadada",
        height: 33,
        width: "100%",
        display: "flex",
        letterSpacing: 1,
        bottom: 0,
        border: "0.5px solid black",
      }}
    >
      <div
        onClick={() => {
          setDesktopScreen("HOME");
        }}
        style={tabStyle}
        className="hvr-grow"
      >
        {desktopScreen === "HOME" && "𐙚"} Home{" "}
      </div>
      <div
        style={tabStyle}
        className="hvr-grow"
        onClick={() => {
          setDesktopScreen("PORTFOLIO");
        }}
      >
        {desktopScreen === "PORTFOLIO" && "𐙚"} Projects{" "}
      </div>
      <Clock />

      {/* <ul
        style={{ color: "black !important", float: "right" }}
        className="social-links"
      >
        {networks}
      </ul> */}
    </div>
  );
};

export default StartBar;
