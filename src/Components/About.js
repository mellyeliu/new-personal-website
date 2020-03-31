import React, { Component } from 'react';

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

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Hi! Thanks for stopping by.</h2>

            <p>I’m currently a 4th year engineering student at the University of Waterloo. 
               I’ve previously interned at Instagram, Credit Karma, and InfoScout in backend and full-stack development.
               <br/><br/>I get so much enjoyment from the creative process, whether the medium is art, writing or code. 
               I’ll always be feverishly honing these skills, trying to reduce the disparity between what I can make and what I aspire to. 
               <br/><br/>It’s in this artistic expression that I begin to piece together my sense of self. You're guaranteed to hear me rambling about clothing to fandom to bedroom pop.
               And my quiet moments of reflection, doodling, bouts of retail therapy—it’s all part of this bigger journey in figuring out the rest. 
               Passions and hobbies, fears and neuroses, I invite you to come along for the ride.
            </p>
            {/* <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div> */}
         </div>
      </div>

   </section>
    );
  }
}

export default About;
