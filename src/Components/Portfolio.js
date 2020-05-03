import React, { Component } from 'react';
import Nav from './Nav'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import Fade from 'react-reveal/Fade';


class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="two columns portfolio-item">
           <div className="item-wrap">
            {/* <a href={projects.url}> */}
            <a> 
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                     {/* <br/> */}
                     <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
      var art = this.props.data.art.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="two columns portfolio-item">
           <div className="item-wrap">
            {/* <a href={projects.url}> */}
               <img alt={projects.title} src={projectImage} />
               {/* <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div> */}
            {/* </a> */}
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">


      <div className="row">
        <Fade right>
        <div className="tagline"><h2>here are some of my works.</h2></div>
        </Fade>
         <div className="twelve columns collapsed">
            {/* <div class='subline'>Here's a collection of things I've worked on over the years. I find it hard to finish things, but I'm working on it. Here's a collection of things I've worked on over the years. I find it hard to finish things, but I'm working on it.</div> */}

            {/* <h1>All Posts.</h1> */}
            <Tabs
              defaultTab="one"
              onChange={(tabId) => { console.log(tabId) }}
            >
              <TabList style={{marginLeft: 20}}>
                <Tab tabFor="one">PROJECTS</Tab>
                <Tab tabFor="two">ART</Tab>
              </TabList>
              <TabPanel tabId="one">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  {projects}
                </div>
              </TabPanel>
              <TabPanel tabId="two">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  {art}
                </div>
              </TabPanel>
            </Tabs>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
