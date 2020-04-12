import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <a href={network.url}><li key={network.name} className="hvr-grow-big"><i className={network.className}></i></li></a>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li id="logo">MELLYE.LIU</li>
            <div id="homenav">
               <li className='current'><a href="/">Home</a></li>
               <li className='hvr-grow'><a href="blog">Blog</a></li>
               <li className='hvr-grow'><a href="#portfolio">Works</a></li>
            </div>
           {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text"> 
            <Fade top delay={300}>
            <h1 className="responsive-headline">{name}</h1>

            </Fade>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
    );
  }
}

export default Header;
