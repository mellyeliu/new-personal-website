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
        <div className="bottom-left">{photo.place} <br/>{photo.date}</div>
        </div>
      }, this)
    }
    return (
      <header id="home">
      <Nav data={this.props.data} title='MELISSA LIU' subtitle='Code / Writing / Art'/>
      <div onClick={this.toggleButton}  className="banner">
          <div className="container" style={{zIndex: 1000000}}>
            <div className="top-left">{!this.state.isActive ? (<span id="play-button">PAUSED &nbsp;<i style={{fontSize: 8}} class="fas fa-pause"></i></span>): (<span id="play-button">PLAY &nbsp;<i style={{fontSize: 8}} class="fas fa-play"></i></span>)}</div>
        </div>
          <Carousel autoplay={this.state.isActive} wrapAround={true} transitionMode='fade'
          withoutControls={true} pauseOnHover={false} autoplayInterval={3000} enableKeyboardControls={true}>
            {art}
          </Carousel>
      </div>
   </header>
    );
  }
}

export default Header;
