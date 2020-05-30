import React, { Component } from 'react';
import Nav from './Nav'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import 'react-web-tabs/dist/react-web-tabs.css';
import Fade from 'react-reveal/Fade';


class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="two columns portfolio-item">
           <div className="item-wrap">
            <a> 
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
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
               <img alt={projects.title} src={projectImage} />
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
            <Tabs
              defaultTab="one"
              onChange={(tabId) => { console.log(tabId) }}
            >
              <TabList style={{marginLeft: 20}}>
                <Tab tabFor="one">PROJECTS</Tab>
                <Tab tabFor="two">ART</Tab>
              </TabList>
              <TabPanel tabId="one">
                <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
                  <Fade>
                  {projects}
                  </Fade>
                </div>
              </TabPanel>
              <TabPanel tabId="two">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade>
                  {art}
                  </Fade>
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
