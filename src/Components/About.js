import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {
    reveal: false
  }

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
        <Fade spy={this.state.reveal} left>
          <div className="four columns" style={{marginTop:0}}>
            <img className="profile-pic"  src={'images/me2.JPG'} />
            <div style={{color: 'white', marginTop: -40}}>.</div>
            <div style={{color: 'white'}}>.</div>
          </div>
         </Fade>

          <Fade fraction={0.65} delay={50} right onReveal={ () => { if (!this.state.reveal) {this.setState({reveal: true})} } }>
         <div className="fulltest" style={{marginTop: 5, color: 'white'}}>|</div>
         </Fade>
      </div>
      <br/>
   </section>
    );
  }
}

export default About;
