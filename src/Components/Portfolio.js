import React, { Component } from 'react';
import Nav from './Nav'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';


class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="two columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">


      <div className="row">

         <div className="twelve columns collapsed">
            {/* <div class='tagline'>dream big. stay inspired.</div>
            <div class='subline'>Here's a collection of things I've worked on over the years. I find it hard to finish things, but I'm working on it. Here's a collection of things I've worked on over the years. I find it hard to finish things, but I'm working on it.</div> */}

            {/* <h1>All Posts.</h1> */}
            <Tabs
              defaultTab="one"
              onChange={(tabId) => { console.log(tabId) }}
            >
              <TabList>
                <Tab tabFor="one">PROJECTS</Tab>
                <Tab tabFor="two">ART</Tab>
                <Tab tabFor="three">PHOTOS</Tab>
              </TabList>
              <TabPanel tabId="one">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  {projects}
                </div>
              </TabPanel>
              <TabPanel tabId="two">
                <p>Tab 2 content</p>
              </TabPanel>
              <TabPanel tabId="three">
                <p>Tab 3 content</p>
              </TabPanel>
            </Tabs>

            {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div> */}
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
