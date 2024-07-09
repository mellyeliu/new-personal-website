import React, { useState, useEffect, useContext } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import NameTag from "./Components/NameTag";
import Portfolio from "./Components/Portfolio";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import Fade from "react-reveal/Fade";
import Nav from "./Components/Nav";
import AsciiArtBackground from "./Components/AsciiArtBackground";
import PortfolioData from "./Data/PortfolioData";
import TextCursor from "./Components/TextCursor";
import { isMobile } from "react-device-detect";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [isFoldersOff, setisFoldersOff] = useState(false);
  //const [showCursor, setShowCursor] = useState("");
  const { cursorString, setCursorString } = useContext(ThemeContext);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Set a timeout to delay the resize event
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500); // Delay of 500 milliseconds

    // Clean up the timer when the component unmounts or the effect reruns
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme, fullScreen }) => (
          <>
            {!isMobile && <TextCursor />}
            <div
              className={`App ${theme === "dark" ? "" : ""}`}
              style={{
                overflow: fullScreen ? "hidden" : "scroll",
                height: fullScreen ? `${windowHeight}px` : null,
              }}
            >
              {!fullScreen && <Nav />}
              {!isFoldersOff && fullScreen && <NameTag />}
              <Header
                dest={"home"}
                isFoldersOff={isFoldersOff}
                setisFoldersOff={setisFoldersOff}
              />
              <div
                style={{
                  display: fullScreen ? "none" : "block",
                  position: "relative",
                }}
              >
                <Portfolio
                  style={{ zIndex: 1000000, position: "relative" }}
                  data={PortfolioData.portfolio}
                />
                <Footer data={PortfolioData.main} />
              </div>
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
