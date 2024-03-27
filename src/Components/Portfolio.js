import React, { Component, useState } from 'react';
import Nav from './Nav'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import 'react-web-tabs/dist/react-web-tabs.css';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';


const Portfolio = ({data}) => {
  const [hovered, setHovered] = useState(false);
  const [currentImageURL, setCurrentImageURL] = useState('');

  const onEnter = ({projectImage}) => {
    setHovered(true);
    setCurrentImageURL(projectImage);
  };
  const onExit = () => {
    setHovered(false);
  };

  // document.addEventListener('scroll', function() {
  //   if (timeout !== null) {
  //     clearTimeout(timeout);
  //   }

  //   timeout = setTimeout(function() {
  //     var centeredDiv = document.getElementByClass('overlay');
  //     var viewportHeight = window.innerHeight;
  //     var scrollTop = window.scrollY;
  //     var newTop = scrollTop + (viewportHeight / 2);

  //     centeredDiv.style.top = newTop + 'px';
  //   }, 500); // Adjust the timeout as needed for performance.
  // });

  if (data) {
    var projects = data.projects.map(function(projects, i){
      var projectImage = 'images/portfolio/'+projects.image;
      return <div key={projects.title} style={{padding: "0 15px"}}className="two columns portfolio-item">
      <div className="item-wrap">
       <a target="_blank" href={projects.url}>
          <img className="overlay" alt={projects.title} src={projectImage} style={{height: 200, width: '100%'}} />
          <div style={{height: 200, width: '100%'}}>
             <div className="portfolio-item-meta" style={{padding: 18}}>
            <h5>&#40;{i}&#41; {projects.title}</h5>
                <p>{projects.category}</p>
                <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
             </div>
           </div>
       </a>
     </div>
   </div>
    })

//   var projects = data.projects.map(function(projects, i){
//     var projectImage = 'images/portfolio/'+projects.image;
//     return <div key={projects.title} style={{padding: "0 15px"}}className="two columns portfolio-item">
//     <div className="item-wrap">
//      <a target="_blank" href={projects.url}>
//         <h5>&#40;{i}&#41; {projects.title}</h5>
//         <img alt={projects.title} src={projectImage} style={{height: 200, width: '100%'}} />
//         <div className="overlay" style={{height: 200, width: '100%'}}>
//            <div className="portfolio-item-meta" style={{padding: 18}}>
//           {/* <h5>&#40;{i}&#41; {projects.title}</h5> */}
//               <p>{projects.category}</p>
//               <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
//            </div>
//          </div>
//      </a>
//    </div>
//  </div>
//   })

    var art = data.art.map(function(projects, i){
      var projectImage = 'images/portfolio/'+projects.image;
      return <div key={projects.title} className="two columns portfolio-item">
         <div className="item-wrap">
              {(false) ?
              (<Carousel
                renderCenterLeftControls={() => (``)}
                renderCenterRightControls={() => ('')}
                >
                <img src={projectImage} />
                <img src={'images/portfolio/artaa-min.jpg'} />
              </Carousel>) :
              (<img alt={projects.title} src={projectImage} />)
              }
        </div>
      </div>
    })

  }

    return (
      <section id="portfolio">
        {/* <marquee scrollamount="1">THIS IS A SPACE FOR CREATIVITY </marquee> */}
        <Fade duration={1000 }  delay={500}>
      <div className="row">
        <Fade top>
        <div style={{marginBottom: -15}}className="tagline"></div>
        </Fade>
         <div className="twelve columns collapsed">
            <Tabs
              defaultTab="one"
              onChange={(tabId) => { console.log(tabId) }}
            >
              <TabList>
              <Tab tabFor="one">₊✩‧₊˚&#40; All &#41; ˚₊✩‧₊  <span className="browserx">×</span></Tab>
                <Tab tabFor="two"> ‧₊˚&#40; Code &#41;✩ ₊˚ <span className="browserx">×</span></Tab>
                <Tab tabFor="three">˚₊‧꒰ა &#40; Art &#41; ໒꒱ ‧₊˚<span className="browserx">×</span></Tab>
                <Tab tabFor="four">.•*𓆩 &#40; Writing &#41; 𓆪*•.<span className="browserx">×</span></Tab>
              {/* <Tab tabFor="one">&#40; All	&#41;</Tab>
                <Tab tabFor="two">&#40; Projects	&#41;</Tab>
                <Tab tabFor="three">&#40; Art	&#41;</Tab>
                <Tab tabFor="four">&#40; Writing	&#41;</Tab> */}
                <span className="browsero">○ ○ ○</span>
              </TabList>
              <TabPanel tabId="one">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500}  delay={100}>
                  {projects}
                  </Fade>
                </div>
              </TabPanel>
              <TabPanel tabId="two">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500}  delay={100}>
                  {projects}
                  </Fade>
                </div>
              </TabPanel>
              <TabPanel tabId="three">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500 }  delay={100}>
                  {art}
                  </Fade>
                </div>
              </TabPanel>
              <TabPanel tabId="four">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500 }  delay={100}>
                  {art}
                  </Fade>
                </div>
              </TabPanel>
            </Tabs>
          </div>
      </div>
      </Fade>
   </section>
    );
  }


export default Portfolio;
