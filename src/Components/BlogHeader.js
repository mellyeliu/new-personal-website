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
      <div style={{marginBottom: 20, marginTop: 15}}>
         <div className="row banner">
         <div className="banner-text">
            <h1 id="blog-headline">writing sketchbook</h1>
            <h3 style={{color: 'black'}}>a documentary of new passions, wistful memories, and hard-earned lessons.</h3>
            {/* <hr /> */}
         </div>
      </div>
      <div>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav" style={{background: 'transparent'}}>
            <li id="logo">mellye.liu</li>
            <div id="homenav">
               <li className='hvr-grow'><a href="/">Home</a></li>
               <li className='current'><a href="blog">Blog</a></li>
               <li className='hvr-grow'><a href="#portfolio">Works</a></li>
            </div>
         </ul>
         </nav>
      </div>
      

   </div>
    );
  }
}

export default BlogHeader;
