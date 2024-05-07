import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'
import DesktopIcon from './DesktopIcon';
import Folder from './Folder'
import FileData from '../Data/FileData'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Header extends Component {
  state = {
    isGridLayout: false,
    isChildHovered: "",
    openStates: { 0: [true, false, true, true] },
  }

  handleFolderOpen = (index, isOpen, key) => {
    // Update the state of the specific folder at index
    console.log(isOpen);
    this.setState(prevState => {
      const newOpenStates = { ...prevState.openStates };

      // Update the desired element in the cloned array
      newOpenStates[key][index] = isOpen;

      return newOpenStates;
    });
  };


  toggleButton = () => {
    console.log('hehe')
    this.setState(prevState => ({
      isGridLayout: !prevState.isGridLayout
    }));
    console.log(this.state.isGridLayout);
  }

  handleHoverChange = (hoverState) => {
    this.setState({
      isChildHovered: hoverState
    })
  };

  folders = ['Games', 'Fandoms', 'Wikis', 'About Me'];
  display_folders = ['games', 'fandoms', 'wikis', 'About Me'];
  display_strings = ['( Gamemaking as playing god )', '( Collecting obsessions )', '( Can we build a collective truth ? )', '( Autofiction as always )'];
  alignX = 0;
  alignY = 30;
  counter = 0

  // windowWidth = window.innerWidth;
  // windowHeight = window.innerHeight;

  render() {
    // console.log(this.windowWidth);
    // console.log(this.windowHeight);
    if (this.props.data) {
      this.counter = 0;
      this.alignX = 0;
      this.alignY = 25;
      var art = this.props.data.photos.map(function (photo, i) {
        var imageSrc = 'images/' + photo.image;
        return <div key={photo.date} className="hover-container" >
          <img style={{ opacity: 0 }} id="headerpic" draggable="false" src={imageSrc}></img>

          {this.display_folders.map((folder, ind) => {
            return this.state.openStates && this.state.openStates[0][ind] || false ? (
              FileData[folder].map((image, index) => {
                if (!image.border) {
                  this.alignY = (this.counter % 5 === 0) ? 5 : this.alignY + 16;
                  this.alignX = (this.counter % 5 === 0) ? this.alignX + 10 : this.alignX;
                  if (this.counter === 0) {
                    this.alignX = 5;
                  }
                  this.counter++;
                }
                return (image.border && this.state.isGridLayout) ? <></> : (<DesktopIcon
                  url={image.url}
                  border={image.border ? true : false}
                  hoverString={image.hoverString}
                  onHoverChange={this.handleHoverChange}
                  src={image.src} scale={image.scale}
                  x={this.state.isGridLayout ? this.alignX : image.x}
                  y={this.state.isGridLayout ? this.alignY : image.y}
                  isGridLayout={this.state.isGridLayout}
                ></DesktopIcon>)

              })
            ) : null
          })}
          {this.folders.map((folder, index) => {
            return (
              <Folder src={'images/folder.png'}
                isOpen={this.state.openStates[0][index]}
                onOpen={(isOpen) => this.handleFolderOpen(index, isOpen, 0)}
                hoverString={this.display_strings[index]}
                onHoverChange={this.handleHoverChange}
                caption={folder}
                x={0}
                y={30 + 100 * index}
                scale={0.5} />
            )
          })}
          {this.state.isChildHovered === '' ? <div className="bottom-left">{photo.place} </div> : <div id="header-hover" className="bottom-left">{this.state.isChildHovered} </div>}
        </div>
      }, this)
    }
    return (
      <>
        <header id="home">
          <Fade duration={1000} delay={500}>
            <div className="banner" >
              <div className="container" style={{ zIndex: 1 }}>
                <div onClick={this.toggleButton} className="top-left">{
                  this.state.isGridLayout ? (
                    <span id="play-button">&#40; Shuffle <i style={{ fontSize: 11 }} class="fa fa-random" aria-hidden="true"></i>&#41;</span>)
                    : (<span id="play-button">	&#40; Sort &nbsp;<i style={{ fontSize: 8 }} className="fas fa-play"></i> &#41;</span>)} </div>
              </div>
              <Carousel wrapAround={true} transitionMode='fade' dragging={false} swiping={false}
                defaultControlsConfig={{ pagingDotsStyle: { display: 'none' }, prevButtonStyle: { display: 'none' }, nextButtonStyle: { display: 'none' } }} pauseOnHover={true} autoplayInterval={3000} enableKeyboardControls={false}>
                {art}
              </Carousel>
            </div>
          </Fade>
        </header></>
    );
  }
}

export default Header;
