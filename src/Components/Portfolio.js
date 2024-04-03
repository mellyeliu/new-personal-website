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

  const openPopupWindow = (url) => {
    // event.preventDefault(); // Prevent the default anchor behavior

    // // Dimensions of the popup window
    // const popupWidth = 600;
    // const popupHeight = 400;

    // // Calculate the position to place the popup window in the middle of where the click occurred
    // const posX = event.clientX - (popupWidth / 2);
    // const posY = event.clientY - (popupHeight / 2);

    // // Ensuring the popup stays within the bounds of the screen
    // const left = Math.max(posX, 0);
    // const top = Math.max(posY, 0);

    // const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;
    const features = `width=400,height=250,resizable=no,scrollbars=no,left=200,top=300`;

    // Open the popup
    if (url) {
      window.open(url, 'popupWindow', features)
    }
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
      <div className="item-wrap hvr-grow">
      {projects.url !== ''? (<a target="_blank" href={projects.url}>
          <img alt={projects.title} src={projectImage} style={{height: 200, width: '100%', transform: 'scale(0.9)'}} />
          <div style={{height: 100, width: '100%'}}>
             <div className="portfolio-item-meta" style={{paddingBottom: 18, paddingLeft: 18, paddingRight: 18}}>
            <h5>&#40;{i}&#41; {projects.title}</h5>
                <p>{projects.category}</p>
                <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
             </div>
           </div>
       </a>) : (<><img alt={projects.title} src={projectImage} style={{height: 200, width: '100%', transform: 'scale(0.9)'}} />
          <div style={{height: 100, width: '100%'}}>
             <div className="portfolio-item-meta" style={{paddingBottom: 18, paddingLeft: 18, paddingRight: 18}}>
            <h5>&#40;{i}&#41; {projects.title}</h5>
                <p>{projects.category}</p>
                <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
             </div>
           </div></>)}
     </div>
   </div>
    })

    var writing = data.writing.map(function(projects, i){
      // var projectImage = 'images/portfolio/'+projects.image;
      return <div key={projects.title} style={{padding: "0 15px"}}className="two columns portfolio-item">
      <div className="item-wrap hvr-grow">
       {projects.url !== ''? (<a target="_blank" href={projects.url}>
          <div style={{height: 200, width: '100%'}}>
             <div className="portfolio-item-meta" style={{padding: 18}}>
            <h5>&#40;{i}&#41; {projects.title}</h5>
                <p>{projects.category}</p>
                <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
             </div>
           </div>
       </a>): (
         <div style={{height: 200, width: '100%'}}>
            <div className="portfolio-item-meta" style={{padding: 18}}>
           <h5>&#40;{i}&#41; {projects.title}</h5>
               <p>{projects.category}</p>
               <p style={{paddingTop: 8}}>Made using {projects.languages}.</p>
            </div>
          </div>
       )}
     </div>
   </div>
    })

    console.log(writing);
    console.log(data.writing);
    console.log("hellooo");

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
              <Tab tabFor="one"> Visuals ⋆𐙚₊˚⊹♡ </Tab>
                <Tab tabFor="four"> Text ‧₊˚🖇️✩ ₊</Tab>
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
              <TabPanel tabId="four">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500}  delay={100}>
                  {writing}
                  </Fade>
                </div>
              </TabPanel>
              {/* <TabPanel tabId="three">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500 }  delay={100}>
                  {projects}
                  </Fade>
                </div>
              </TabPanel>
              <TabPanel tabId="four">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  <Fade duration={500 }  delay={100}>
                  {projects}
                  </Fade>
                </div>
              </TabPanel> */}
            </Tabs>
            <div style={{width: '100%', height: 50, borderTop: '0.5px solid black',
    backgroundImage: 'url(images/tabs.png)'}}></div>
          </div>
      </div>
      </Fade>
   </section>
    );
  }


export default Portfolio;
