import React, { Component } from 'react';

class BlogHeader extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="blog">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className={`${this.props.dest == 'home' ? "current" : ""}`}><a href="/">Home</a></li>
            {/* <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Experience</a></li> */}
            <li className={`${this.props.dest == 'blog' ? "current" : ""}`}><a href="blog">Blog</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">life stories.</h1>
            <h3>a documentary of new passions, wistful memories, and hard-earned lessons.</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default BlogHeader;
