import React, { Component, useState, useEffect } from "react";
import Nav from "./Nav";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
// import 'react-web-tabs/dist/react-web-tabs.css';
import Fade from "react-reveal/Fade";
import Carousel from "nuka-carousel";

const Portfolio = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const [currentImageURL, setCurrentImageURL] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 0.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const onEnter = ({ projectImage }) => {
    setHovered(true);
    setCurrentImageURL(projectImage);
  };
  const onExit = () => {
    setHovered(false);
  };

  const openPopupWindow = (url) => {
    // const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;
    const features = `width=400,height=250,resizable=no,scrollbars=no,left=200,top=300`;

    // Open the popup
    if (url) {
      window.open(url, "popupWindow", features);
    }
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
              width: "100%",
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
          <div className="item-wrap hvr-grow">
            {projects.url !== "" ? (
              <a target="_blank" href={projects.url} rel="noreferrer">
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

  if (data) {
    var projects = getProjects(data.projects, "all");
    var code = getProjects(data.projects, "code");
    var design = getProjects(data.projects, "design");
  }

  return (
    <section id="portfolio">
      <div
        className={`row fade-in ${isVisible ? "visible" : ""}`}
        style={{ zIndex: 1000, background: "white" }}
      >
        <Fade top>
          <div style={{ marginBottom: -15 }} className="tagline"></div>
        </Fade>
        <div className="twelve columns collapsed">
          <Tabs
            defaultTab="one"
            onChange={(tabId) => {
              console.log(tabId);
            }}
          >
            <TabList>
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
                className="bgrid-thirds s-bgrid-thirds cf"
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
          <div
            style={{
              width: "100%",
              height: 50,
              borderTop: "0.5px solid black",
              backgroundImage: "url(images/tabs.png)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
