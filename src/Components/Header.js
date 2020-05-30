import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'


import '@animated-burgers/burger-squeeze/dist/styles.css' 



class Header extends Component {
  render() {
    return (
      <header id="home">
      <Nav data={this.props.data} title='MELISSA LIU' subtitle='Code / Writing / Art'/>
      
      <Fade top duration={2000}>
      <div className="banner">
      {/* <img style={{cursor: 'default'}} src={'images/header1.jpeg'}></img> */}
      <h6></h6>
          <Carousel autoplay={true} wrapAround={true} transitionMode='fade'
          withoutControls={true} pauseOnHover={false} autoplayInterval={3000}>
            <div className="container">
              <img style={{cursor: 'default'}} src={'images/headera.jpg'}></img>
              <div className="bottom-left">los angeles <br/>02·17·2020</div>
            </div>
            <div className="container">
              <img style={{cursor: 'default'}} src={'images/headerb.jpg'}></img>
              <div className="bottom-left">niagara falls <br/>01·04·2019</div>
            </div>
            <div className="container">
              <img style={{cursor: 'default'}} src={'images/headerc.jpg'}></img>
              <div className="bottom-left">san francisco<br/>12·10·2018</div>
            </div>
            <div className="container">
              <img style={{cursor: 'default'}} src={'images/headere.jpg'}></img>
              <div className="bottom-left">blue mountain<br/>12·17·2019</div>
            </div>
            <div className="container">
              <img style={{cursor: 'default'}} src={'images/headerd.jpg'}></img>
              <div className="bottom-left">miami<br/>04·23·2019</div>
            </div>
            {/* <div className="container">
              <img style={{cursor: 'default'}} src={'images/headerf.jpg'}></img>
              <div className="bottom-left">blue mountain<br/>12·17·2019</div>
            </div> */}
          </Carousel>
      </div>
      </Fade>

   </header>
    );
  }
}

export default Header;
