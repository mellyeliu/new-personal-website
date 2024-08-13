import React, { useState, useEffect, useRef, useContext } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Fade from "react-reveal/Fade";
import PortfolioData from "../Data/PortfolioData";
import { ThemeContext } from "../ThemeContext";
import { Screen } from "../App";
import { isMobile } from "react-device-detect";

const Portfolio = ({ setDesktopScreen }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [favourite, setFavourite] = useState("✩");
  const [activeTab, setActiveTab] = useState("one");
  const tabTwoRef = useRef(null);

  const handleInputChange = (event) => {
    if (event.target.value === "YES" && tabTwoRef.current) {
      setActiveTab("two"); // Switch to the desired tab ID
    }
  };

  // Step 3: Function to toggle the state
  const handleFavourite = () => {
    setFavourite(favourite === "✩" ? "✮" : "✩");
  };
  // const [activeTab, setActiveTab] = useState("tab1");
  const { fullScreen, cursorString, setCursorString } =
    useContext(ThemeContext);

  const urlBar = (tab, tabProjects) => {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            borderBottom: "0.5px solid black",
            height: 60,
            justifyContent: "center",
            position: "absolute",
            top: 50,
            backgroundColor: "white",
            borderTop: "0.5px solid black",
            zIndex: 100,
            left: 0,
          }}
        >
          <div style={{ padding: 18 }}>
            <svg
              width="20"
              height="20"
              onClick={() => {
                if (isMobile) {
                  window.location.reload();
                }
                setDesktopScreen(Screen.HOME);
              }}
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.528 6.236h-12.884v1h21.883z"
                transform="scale(-1, 1) translate(-24, 0)"
              />
            </svg>
            <span style={{ width: 15 }}>&nbsp;&nbsp;&nbsp;</span>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "#bbb" }}
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-12.884v1h21.883z"
                transform="translate(-4, 0)"
              />
            </svg>
            <span style={{ width: 15 }}> &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              style={{ cursor: "pointer" }}
            >
              <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z" />
            </svg>
          </div>
          <div
            style={{
              flexGrow: 1,
              border: "0.5px solid black",
              letterSpacing: 2,
              margin: "15px 20px 15px 5px",
              height: 30,
              float: "right",
              color: "black",
              fontStyle: "italic",
              paddingLeft: 20,
              borderRadius: 20,
              position: "relative",
            }}
          >
            {" "}
            <input
              type="text"
              onChange={handleInputChange}
              style={{
                border: "none",
                background: "none",
                padding: "0",
                margin: "0",
                outline: "none",
                color: "inherit",
                font: "inherit",
                cursor: "text",
                width: "100%",
              }}
              defaultValue={`C://Users/mellyeliu/Projects/${tab}`}
            />
            <div
              onClick={handleFavourite}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontStyle: "normal",
                fontSize: "1.2em",
              }}
            >
              {favourite}
            </div>
          </div>
        </div>
        <div
          id="portfolio-wrapper"
          className="bgrid-thirds s-bgrid-thirds cf"
          style={{ padding: isMobile ? "70px 10px 100px" : "50px 80px" }}
        >
          <Fade duration={500} delay={100}>
            {tabProjects}
          </Fade>
        </div>
      </>
    );
  };

  const getProjects = (projects, category) => {
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((item) => item.type.includes(category));

    return filteredProjects.map(function (projects, i) {
      var projectImage = "images/portfolio/" + projects.image;

      var project = (
        <>
          <img
            draggable="false"
            alt={projects.title}
            src={projectImage}
            style={{
              height: 200,
              // width: "100%",
              transform: "scale(0.9)",
            }}
          />
          <div style={{ height: 100, width: "100%" }}>
            <div
              className="portfolio-item-meta"
              style={{
                paddingBottom: 18,
                paddingLeft: 18,
                paddingRight: 18,
              }}
            >
              <h5>
                &#40;{i + 1}&#41; {projects.title}; {projects.year}
              </h5>
              <p>
                {projects.category}{" "}
                {projects.collaborators && "Collaborators: "}
                {projects.collaborators && projects.collaborators.length > 0
                  ? projects.collaborators
                      .map((collaborator) => (
                        <a
                          key={collaborator.name}
                          href={collaborator.url}
                          target="_blank"
                          rel="noreferrer"
                          className="collab"
                          style={{
                            display: "inline", // Ensures the link is displayed inline
                            color: "inherit", // Keeps the text color the same as its parent
                          }}
                        >
                          {collaborator.name}
                        </a>
                      ))
                      .reduce((prev, curr) => [prev, ", ", curr])
                  : null}
              </p>
              <p style={{ paddingTop: 8 }}>
                Made with {projects.languages} &lt;3
              </p>
            </div>
          </div>
        </>
      );
      return (
        <div
          key={projects.title}
          style={{ padding: "0 15px" }}
          className="two columns portfolio-item"
        >
          <div className="hvr-grow">
            {projects.url !== "" ? (
              <a
                //

                // onMouseLeave={handleHoverChange}
                target="_blank"
                href={projects.url}
                rel="noopener noreferrer"
              >
                {project}
              </a>
            ) : (
              <>{project}</>
            )}
          </div>
        </div>
      );
    });
  };

  var projects = getProjects(PortfolioData.portfolio.projects, "all");
  var code = getProjects(PortfolioData.portfolio.projects, "code");
  var design = getProjects(PortfolioData.portfolio.projects, "design");
  return (
    <section id="portfolio">
      <div
        className={`row fade-in custom-scrollbar ${isVisible ? "visible" : ""}`}
        style={{
          height: "100%",
          backgroundColor: "white",
          width: fullScreen ? "100%" : "90%",
          maxWidth: fullScreen ? "100%" : 1200,
        }}
      >
        <Fade top>
          <div style={{ marginBottom: -15 }} className="tagline"></div>
        </Fade>
        <div className="twelve columns collapsed" style={{ height: "100%" }}>
          <Tabs
            defaultTab={"one"}
            // activeTab={activeTab}
            // onChange={(tabId) => setActiveTab(tabId)}
          >
            <TabList>
              <div style={{ height: 5 }}></div>
              <Tab style={{ zIndex: 100000 }} tabFor="one">
                {" "}
                All ⋆𐙚₊˚⊹♡{" "}
              </Tab>
              <Tab
                selected={activeTab === "two"}
                ref={tabTwoRef}
                style={{ zIndex: 100000 }}
                tabFor="two"
              >
                {" "}
                Code ‧&lt;₊˚#✩ /&gt;₊
              </Tab>
              <Tab style={{ zIndex: 100000 }} tabFor="three">
                {" "}
                Design ‧&lt;₊˚🤍✩ /&gt;₊
              </Tab>
              <span className="browsero">○ ○ ○</span>
            </TabList>
            <TabPanel tabId="one">{urlBar("All", projects)}</TabPanel>
            <TabPanel tabId="two">{urlBar("Code", code)}</TabPanel>
            <TabPanel tabId="three">{urlBar("Design", design)}</TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
