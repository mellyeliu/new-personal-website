import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Fade from "react-reveal/Fade";
import PortfolioData from "../Data/PortfolioData";
import { ThemeContext } from "../ThemeContext";
import { Screen } from "../App";
import { isMobile } from "react-device-detect";

const Portfolio = ({ setDesktopScreen }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { fullScreen, cursorString, setCursorString } =
    useContext(ThemeContext);

  const handleHoverChange = (text) => {
    // setCursorString(text);
    // if (cursorString !== "") {
    //   setCursorString("");
    // } else {
    //   setCursorString(text);
    // }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 500); // 0.5 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);

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
          zIndex: 1000,
          background: "white",
          height: "100%",
          width: fullScreen ? "100%" : "90%",
          maxWidth: fullScreen ? "100%" : 1200,
        }}
      >
        <Fade top>
          <div style={{ marginBottom: -15 }} className="tagline"></div>
        </Fade>
        <div className="twelve columns collapsed" style={{ height: "100%" }}>
          <Tabs
            defaultTab="one"
            onChange={(tabId) => {
              console.log(tabId);
            }}
          >
            <TabList>
              <div style={{ height: 5 }}></div>
              <Tab tabFor="one"> All ⋆𐙚₊˚⊹♡ </Tab>
              <Tab tabFor="two"> Code ‧&lt;₊˚#✩ /&gt;₊</Tab>
              <Tab tabFor="three"> Design ‧&lt;₊˚🤍✩ /&gt;₊</Tab>
              {/* <Tab tabFor="four"> Text ‧₊˚🖇️✩ ₊</Tab> */}
              {/* <Tab tabFor="one">&#40; All	&#41;</Tab>
                <Tab tabFor="two">&#40; Projects	&#41;</Tab>
                <Tab tabFor="three">&#40; Art	&#41;</Tab>
                <Tab tabFor="four">&#40; Writing	&#41;</Tab> */}
              <span className="browsero">○ ○ ○</span>
            </TabList>
            <TabPanel tabId="one">
              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf custom-scrollbar"
                style={{ padding: isMobile ? "30px 10px 100px" : "0px 80px" }}
              >
                <Fade duration={500} delay={100}>
                  {projects}
                </Fade>
              </div>
            </TabPanel>
            <TabPanel tabId="two">
              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
                style={{ padding: isMobile ? "10px" : "0px 80px" }}
              >
                <Fade duration={500} delay={100}>
                  {code}
                </Fade>
              </div>
            </TabPanel>
            <TabPanel tabId="three">
              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
                style={{ padding: isMobile ? "10px" : "0px 80px" }}
              >
                <Fade duration={500} delay={100}>
                  {design}
                </Fade>
              </div>
            </TabPanel>
            {/* <TabPanel tabId="four">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500} delay={100}>
                    {writing}
                  </Fade>
                </div>
              </TabPanel> */}
          </Tabs>
          {/* <div
            style={{
              width: "100%",
              height: 40,
              borderTop: "0.5px solid black",
              position: "absolute",
              bottom: 0,
              backgroundImage: "url(images/tabs.png)",
            }}
          ></div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
