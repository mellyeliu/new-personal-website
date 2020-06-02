import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'


import '@animated-burgers/burger-squeeze/dist/styles.css' 



class Header extends Component {
  state = {
    isActive: true
  }

  toggleButton = () => {
    console.log('hehe')
    this.setState({
        isActive: !this.state.isActive
    })
  }
  render() {
    if(this.props.data){
      var art = this.props.data.photos.map(function(photo){
        var imageSrc = 'images/'+photo.image;
        return  <div key={photo.date} className="container">
          <img id="headerpic" src={imageSrc}></img>
          {/* <button onClick={this.toggleButton} className="top-left hvr-grow">PLAY &nbsp;<i class="fas fa-backward"></i>&nbsp; {this.state.isActive ? (<span><i class="fas fa-pause"></i></span>): (<span> &#9658;</span>)} &nbsp;<i class="fas fa-forward"></i></button> */}
        <div className="bottom-left">{photo.place} <br/>{photo.date}</div>
        </div>
      }, this)
    }
    return (
      <header id="home">
      <Nav data={this.props.data} title='MELISSA LIU' subtitle='Code / Writing / Art'/>
      
      <Fade top duration={2000}>
      <div onClick={this.toggleButton}  className="banner">
          <div className="container" style={{zIndex: 1000000}}>
            <div className="top-left">{!this.state.isActive ? (<span id="play-button">PAUSED &nbsp;<i style={{fontSize: 8}} class="fas fa-pause"></i></span>): (<span id="play-button">PLAY &nbsp;<i style={{fontSize: 8}} class="fas fa-play"></i></span>)}</div>
          {/* <div className="top-left">PLAY &nbsp;<button onClick={{p}}> <i class="fas fa-backward"></i></button> <button onClick={this.toggleButton}> {this.state.isActive ? (<i style={{fontSize: 9, paddingRight: 4}} class="fas fa-pause"></i>) : (<i style={{fontSize: 8, paddingRight: 2}} class="fas fa-play"></i> )} </button>&nbsp;<i class="fas fa-forward"></i></div> */}
        </div>
          <Carousel autoplay={this.state.isActive} wrapAround={true} transitionMode='fade'
          withoutControls={true} pauseOnHover={true} autoplayInterval={4000} enableKeyboardControls={true}>
            {art}
          </Carousel>
      </div>
      </Fade>

   </header>
    );
  }
}

export default Header;
