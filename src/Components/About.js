import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';

class About extends Component {
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
    var props = this.props

    return (
      <section id="about">

         <div className="row skills" id="two">
         <div className="four columns">
            <Carousel className="hvr-icon-pulse-grow"
            renderCenterLeftControls={({ previousSlide }) => (``)}
            renderCenterRightControls={({ nextSlide }) => ('')}>
            <img className="profile-pic"  src={'images/experiences2.jpg'} alt="Tim Baker Profile Pic" />
            <img className="profile-pic"  src={'images/carousel_1.jpg'} alt="Tim Baker Profile Pic" />
            <img className="profile-pic"  src={'images/carousel_3.jpg'} alt="Tim Baker Profile Pic" />
            </Carousel>
         </div>
         <div className="eight columns main-col" style={{marginTop: 60}}>
            {/* <div style={{color: 'white'}}>hi</div> */}
            <Fade right delay={200}>
            <h2 className="menu" style={{marginBottom: 5, marginLeft: -10, border: 'none'}}> <span style={{background: 'none'}}>thanks for stopping by!</span></h2>
            </Fade>
            <p className="blurb">I’m a 4th year engineering student at the <a className='sunderline' href={'https://uwaterloo.ca/'}>University of Waterloo</a>. 
               I’ve previously interned at <a className='sunderline' href={'https://instagram.com/'}>Instagram</a>, <a className='sunderline' href={'https://www.creditkarma.ca/'}>Credit Karma</a>, and <a className='sunderline' href={'https://www.numerator.com/'}>InfoScout</a> in backend and full-stack development.
               <br/><br/>I get so much enjoyment from the creative process, whether the medium is art, writing or code. 
               I’ll always be working away at these skills, trying to reduce the disparity between what I can make and what I aspire to. 
               <br/><br/>It’s through this artistic expression that I begin to figure out who I am. Someone a little reckless, easily excited, an overthinker. Someone with passions to nurture, from style to fandom to bedroom pop.
               And it doesn't stop there—I'm on a lifelong journey to figure out the rest. 
               Hobbies and dreams, fears and neuroses, I invite you to come along for the ride.
            </p>
         </div>
      </div>
      <br/>
   </section>
    );
  }
}

export default About;
