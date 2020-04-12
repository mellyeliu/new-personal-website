import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        
      <div className="row skills" id="two">
          <Fade right>
          <h2 className="menu" style={{marginBottom: 50, textAlign: 'left'}}><span>learn a bit about me.</span></h2>
          </Fade>          
          <div className="four columns ">
          <Link to='/blog'>
              <div className="base hvr-grow">
              <div className="overlay">
                <div className="test">
                INTERNSHIPS.
                </div>
                </div>
            
                <img className="profile-pic"  src={'images/experiences2.jpg'} alt="Tim Baker Profile Pic" />
              </div>
              </Link>
            </div>
            <div className="four columns">
              <div className="base hvr-grow">
              <div className="overlay">
                  PROJECTS.
                  {/* <span>EXPERIENCES</span> */}
                </div>
              <img className="profile-pic"  src={'images/carousel_1.jpg'} alt="Tim Baker Profile Pic" />
              </div>
            </div>
            <div className="four columns">
              <div className="base hvr-grow">
              <div className="overlay">
                  WRITING.
                  {/* <span>EXPERIENCES</span> */}
                </div>
              <img className="profile-pic"  src={'images/writing2.jpg'} alt="Tim Baker Profile Pic" />
              </div>
            </div>
            {/* <div className="eight columns">
                 <div className="menu-headline">1 Experiences</div>
                 <p>Take a look inside my internships, extracurriculars, and others. Take a look inside my internships, extracurriculars, and others. Take a look inside my internships, extracurriculars, and others.</p>
            </div> */}
          {/* <div className="four columns"><img className="profile-pic"  src={'images/carousel_1.jpg'} alt="Tim Baker Profile Pic" /></div>
          <div className="four columns"><img className="profile-pic"  src={'images/carousel_3.jpg'} alt="Tim Baker Profile Pic" /></div> */}
      </div>
      <br/>

   </section>
    );
  }
}

export default Menu;
