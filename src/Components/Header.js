import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'


import '@animated-burgers/burger-squeeze/dist/styles.css' 



class Header extends Component {
  render() {
    return (
      <header id="home">
      <Nav data={this.props.data} title='MELISSA LIU' subtitle='[Code Writing Art]'/>
      
      <Fade top duration={2000}>
      <div className="banner">
      <img style={{cursor: 'default'}} src={'images/header1.jpeg'}></img>
          {/* <Carousel autoplay={true} wrapAround={true} transitionMode='fade' speed={2000}
          withoutControls={true} pauseOnHover={false} autoplayInterval={3000}>
          <img style={{cursor: 'default'}} src={'images/header-background.jpg'}></img>
          <img style={{cursor: 'default'}} src={'images/header2.jpg'}></img>
           <img style={{cursor: 'default'}} src={'images/header3.jpg'}></img>
          </Carousel> */}
      </div>
      </Fade>

   </header>
    );
  }
}

export default Header;
