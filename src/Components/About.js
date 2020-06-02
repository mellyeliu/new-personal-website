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
            <img className="profile-pic"  src={'images/me2.jpg'} />
            <div style={{color: 'white', marginTop: -40}}>.</div>
            <div style={{color: 'white'}}>.</div>
          </div>
         </Fade> 
         
        <Fade delay={200} right onReveal={ () => { if (!this.state.reveal) {this.setState({reveal: true})} } }>
         <div className="fulltest" style={{marginTop: 5, color: 'white'}}>|</div>
         <div className="eight columns main-col fulltest2" style={{marginTop: 30}}>
            <h2 className="menu" style={{marginBottom: 5, marginLeft: -10, border: 'none'}}> <span style={{background: 'none'}}>thanks for stopping by!</span></h2>
            <p className="blurb">I’m a 4th year engineering student at the <a className='sunderline' href={'https://uwaterloo.ca/'}>University of Waterloo</a>. 
               I’ve previously interned at <a className='sunderline' href={'https://instagram.com/'}>Instagram</a>, <a className='sunderline' href={'https://www.creditkarma.ca/'}>Credit Karma</a>, and <a className='sunderline' href={'https://www.numerator.com/'}>InfoScout</a> in backend and full-stack development.
               <br/><br/>I get so much enjoyment from creating, whether the medium is art, writing or code. 
               I’m always working away at these skills, trying to close the gap between what I can make and what I aspire to. 
               <br/><br/>It's in this self expression that I piece together who I am. Someone a little neurotic, opinionated, an overthinker. Someone that gets a little too excited at fashion, music or literary fandom. And it doesn't stop there—I'm on a journey to unmask out the rest. Hobbies and dreams, fears and neuroses, I invite you to come along for the ride.
            </p>
         </div>
         </Fade>         
      </div>
      <br/>
   </section>
    );
  }
}

export default About;
