import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'
import DraggableImage from './DraggableImage';
import Folder from './Folder'
import ImageIcon from './ImageIcon';
import FileData from './FileData'
import '@animated-burgers/burger-squeeze/dist/styles.css'


class Header extends Component {
  // const [isChildHovered, setIsChildHovered] = useState(false);
  state = {
    isActive: false,
    isChildHovered: "",
    openStates: {0: [true, true, true, true], 1: [true, true, true]},
  }

  handleFolderOpen = (index, isOpen, key) => {
    // Update the state of the specific folder at index
    console.log(isOpen);
    this.setState(prevState => {
      const newOpenStates = { ... prevState.openStates };

      // Update the desired element in the cloned array
      newOpenStates[key][index] = isOpen;

      return newOpenStates;
    });

    // this.setState(prevState => ({
    //   openStates: prevState.openStates.map((state, i) => i === index ? isOpen : state),
    // }));
  };


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

 folders = ['Games', 'Fandoms', 'Community', 'About Me'];
 display_folders = ['games', 'fandoms', 'community', 'About Me'];
display_strings = ['( Gamemaking as worldbuilding )', '( Collecting obsessions )', '( Can we build a collective truth ? )', '( Autofiction, as always )'];


  render() {
    if(this.props.data){
      var art = this.props.data.photos.map(function(photo, i){
        var imageSrc = 'images/'+photo.image;
        return  <div key={photo.date} className="hover-container" >
          <img id="headerpic" draggable="false" src={imageSrc}></img>

          {this.display_folders.map((folder, ind) => {
            return this.state.openStates && this.state.openStates[0][ind] || false ? (
            FileData[folder].map((image) => (
              <DraggableImage url={image.url} border={image.border ? true: false} hoverString={image.hoverString} onHoverChange={this.handleHoverChange} src={image.src} scale={image.scale} x={image.x} y={image.y} ></DraggableImage>
            ))
          ) : null})}
          {this.folders.map((folder, index) => (
            <Folder src={'images/folder.png'}
              isOpen={this.state.openStates[0][index]}
              onOpen={(isOpen) => this.handleFolderOpen(index, isOpen, 0)}
              hoverString={this.display_strings[index]}
              onHoverChange={this.handleHoverChange}
              caption={folder}
              x={0}
              y={30 + 100 * index}
              scale={0.5} />
          ))}
          {this.state.isChildHovered === '' ? <div className="bottom-left">{photo.place} </div> : <div id="header-hover" className="bottom-left">{this.state.isChildHovered} </div>}
        {/* <div className="hover-text">This is the text displayed on hover</div> */}
        </div>
      }, this)
    }
    return (
      <><Nav data={this.props.data} title='Mellye.liu' subtitle='Code / Writing / Art' /><header id="home">
        <Fade duration={1000 }  delay={500}>
        <div className="banner" >
          <div className="container" style={{ zIndex: 1 }}>
          {/* <div onClick={this.toggleButton}  className="top-left">{!this.state.isActive ? (<span id="play-button">&#40; Paused &#41;</span>) : (<span id="play-button">	&#40; Play &#41;</span>)} </div> */}

            <div onClick={this.toggleButton}  className="top-left">{this.state.isActive ? (<span id="play-button">&#40; Pause &nbsp;<i style={{ fontSize: 8 }} className="fas fa-pause"></i> &#41;</span>) : (<span id="play-button">	&#40; Play &nbsp;<i style={{ fontSize: 8 }} className="fas fa-play"></i> &#41;</span>)} </div>
          </div>
          <Carousel autoplay={this.state.isActive} wrapAround={true} transitionMode='fade' dragging={false} swiping={false}
            defaultControlsConfig={{pagingDotsStyle: {color: 'black'}, prevButtonStyle: {display: 'none'}, nextButtonStyle: {display: 'none'}}} pauseOnHover={true} autoplayInterval={3000} enableKeyboardControls={false}>
            {art}
          </Carousel>
        </div>
        </Fade>
      </header></>
    );
  }
}

export default Header;
