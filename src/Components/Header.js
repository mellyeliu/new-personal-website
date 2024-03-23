import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'
import DraggableImage from './DraggableImage';


import '@animated-burgers/burger-squeeze/dist/styles.css'



class Header extends Component {
  // const [isChildHovered, setIsChildHovered] = useState(false);
  state = {
    isActive: false,
    isChildHovered: ""
  }

  toggleButton = () => {
    console.log('hehe')
    this.setState({
        isActive: !this.state.isActive
    })
  }

  handleHoverChange = (hoverState) => {
    this.setState({
      isChildHovered: hoverState
    })
  };

  render() {
    if(this.props.data){
      var art = this.props.data.photos.map(function(photo){
        var imageSrc = 'images/'+photo.image;
        return  <div key={photo.date} className="hover-container" >
          <img id="headerpic" src={imageSrc}></img>
          <DraggableImage hoverString={"૮꒰ ˶• ༝ •˶꒱ა ♡"} onHoverChange={this.handleHoverChange} src={'images/kaomoji.png'} scale={0.7} x={750} y={100} ></DraggableImage>
           <DraggableImage  hoverString={"archiveofourown.org"} onHoverChange={this.handleHoverChange} src={'images/ao3.png'} scale={0.7} x={150} y={70} ></DraggableImage>
          <DraggableImage  hoverString={"www.neopets.com"} onHoverChange={this.handleHoverChange} src={'images/neopets.png'} scale={0.6} x={20} y={330} ></DraggableImage>
          <DraggableImage  hoverString={"www.tvtropes.org"} onHoverChange={this.handleHoverChange} src={'images/tvtropes.png'} scale={0.5} x={840} y={430} ></DraggableImage>
          <DraggableImage  hoverString={"( 🌐🤍🎀🫧 )"} onHoverChange={this.handleHoverChange} src={'images/internet.png'} scale={0.45} x={300} y={290} ></DraggableImage>
          {/* <div className="bottom-left">{this.state.isChildHovered}</div> */}
          {/* <div id="header-hover" className="hover-text">&#40; 🌐🤍🎀🫧 &#41;</div> */}
          {this.state.isChildHovered === '' ? <div className="bottom-left">{photo.place} </div> : <div id="header-hover" className="bottom-left">{this.state.isChildHovered} </div>}
        {/* <div className="hover-text">This is the text displayed on hover</div> */}
        </div>
      }, this)
    }
    return (
      <><Nav data={this.props.data} title='Mellye.liu' subtitle='Code / Writing / Art' /><header id="home">
        <div className="banner">
          <div className="container" >
          {/* <div onClick={this.toggleButton}  className="top-left">{!this.state.isActive ? (<span id="play-button">&#40; Paused &#41;</span>) : (<span id="play-button">	&#40; Play &#41;</span>)} </div> */}

            <div onClick={this.toggleButton} style={{ zIndex: 1 }} className="top-left">{this.state.isActive ? (<span id="play-button">&#40; Pause &nbsp;<i style={{ fontSize: 8 }} class="fas fa-pause"></i> &#41;</span>) : (<span id="play-button">	&#40; Play &nbsp;<i style={{ fontSize: 8 }} class="fas fa-play"></i> &#41;</span>)} </div>
          </div>
          <Carousel autoplay={this.state.isActive} wrapAround={true} transitionMode='fade' dragging={false} swiping={false}
            withoutControls={true} pauseOnHover={true} autoplayInterval={3000} enableKeyboardControls={true}>
            {art}
          </Carousel>
        </div>
      </header></>
    );
  }
}

export default Header;
