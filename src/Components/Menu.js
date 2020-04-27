import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {

    return (
      <section id="about">
        
      <div className="row skills" id="two">
          <Fade right>
          <h2 className="menu" style={{marginBottom: 50, textAlign: 'left'}}><span>learn a bit about me.</span></h2>
          </Fade>          
          <div className="four mobile-shrink columns ">
            <Link to='/exp'>
              <div className="base hvr-grow">
              <div className="overlay">
                <div className="test">
                INTERNSHIPS
                </div>
                </div>
            
                <img className="profile-pic"  src={'images/experiences2.jpg'} alt="Tim Baker Profile Pic" />
              </div>
            </Link>
            </div>
            <div className="four mobile-shrink columns">
            <Link to='/portfolio'>
              <div className="base hvr-grow">
              <div className="overlay">
                  PORTFOLIO
                </div>
              <img className="profile-pic"  src={'images/pro4.jpg'} alt="Tim Baker Profile Pic" />
              </div>
              </Link>
            </div>
            <div className="four mobile-shrink columns">
            <a href='/blog'>
              <div className="base hvr-grow">
              <div className="overlay">
                  WRITING
                </div>
              <img className="profile-pic"  src={'images/pro5.jpg'} alt="Tim Baker Profile Pic" />
              </div>
              </a>
            </div>
      </div>
      <br/>

   </section>
    );
  }
}

export default Menu;
