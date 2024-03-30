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

  websiteProps = [
    {hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
    src: 'images/kaomoji.png',
    scale: 0.5,
    border: true,
    x: 720,
    y: 150},
    {hoverString: "archiveofourown.org",
    src: 'images/ao3icon.png',
    scale: 0.53,
    x: 150,
    y: 120},
    {hoverString: "www.neopets.com",
    src: 'images/neopetsicon.png',
    scale: 0.55,
    x: 20,
    y: 270},
    {hoverString: "www.tvtropes.org",
    src: 'images/tvtropes.png',
    scale: 0.55,
    x: 250,
    y: 120},
    {hoverString: "https://jstris.jezevec10.com/",
    src: 'images/tetris.png',
    scale: 0.55,
    x: 300,
    y: 140},
    {hoverString: "https://jstris.jezevec10.com/",
    src: 'images/com.png',
    scale: 0.55,
    x: 400,
    y: 160},
    {hoverString: "( Kingdom of Loathing )",
    src: 'images/kolicon.png',
    scale: 0.55,
    x: 280,
    y: 100},
    {hoverString: "( Spider and Web )",
    src: 'images/spiderweb.png',
    scale: 0.55,
    x: 180,
    y: 50},
    {hoverString: "Club Penguin",
    src: 'images/cp.png',
    scale: 0.55,
    x: 640,
    y: 350},
    {hoverString: "Shift",
    src: 'images/shift.png',
    scale: 0.55,
    x: 580,
    y: 270},
    {hoverString: "Fantage",
    src: 'images/fantage.png',
    scale: 0.55,
    x: 820,
    y: 390},
    {hoverString: "Loved",
    src: 'images/loved.png',
    scale: 0.55,
    x: 420,
    y: 30},
    {hoverString: "Rational Wiki",
    src: 'images/rational.png',
    scale: 0.55,
    x: 760,
    y: 420},
    {hoverString: "TRShady",
    src: 'images/trshady.png',
    scale: 0.45,
    x: 820,
    y: 480},
    {hoverString: "windows93",
    src: 'images/windows93.png',
    scale: 0.45,
    x: 30,
    y: 370},
    {hoverString: "are.na",
    src: 'images/arena.png',
    scale: 0.55,
    x: 610,
    y: 410},
    {hoverString: "( daily deviation dream )",
    src: 'images/deviantart.png',
    scale: 0.55,
    x: 710,
    y: 450},
    {hoverString: "( scp foundation )",
    src: 'images/scp.png',
    scale: 0.55,
    x: 440,
    y: 435},
    {hoverString: "( MSCHF )",
    src: 'images/mschf.png',
    scale: 0.55,
    x: 910,
    y: 420},
    {hoverString: "( a dark room )",
    src: 'images/darkroom.png',
    scale: 0.55,
    x: -50,
    y: 170},
    {hoverString: "( Girlhood )",
    src: 'images/emojis.png',
    scale: 0.55,
    border: true,
    x: 560,
    y: 40},
    {hoverString: "( Edit Wars )",
    src: 'images/wiki.png',
    scale: 0.55,
    x: 530,
    y: 120},
    {hoverString: "( 🌐🤍🎀🫧 )",
    src: 'images/internet.png',
    scale: 0.55,
    border: true,
    x: 110,
    y: 310},
  ]



 folders = ['Games', 'Text', 'Misc'];
 display_folders = ['games', 'text', 'misc', "windows"];
 d2_folders = ['About Me', 'Obsessions', 'Fandoms'];

  render() {
    if(this.props.data){
      var art = this.props.data.photos.map(function(photo, i){
        var imageSrc = 'images/'+photo.image;
        return  <div key={photo.date} className="hover-container" >
          <img id="headerpic" src={imageSrc}></img>
          {(i === 0) ? (
            <>
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
              caption={folder}
              x={0}
              y={30 + 100 * index}
              scale={0.5} />
          ))}

          </>
          ) : (
            <>
            {this.d2_folders.map((folder, ind) => {
              return this.state.openStates && this.state.openStates[1][ind] || false ? (
              FileData[folder].map((image) => (
                <DraggableImage url={image.url} border={image.border ? true: false} hoverString={image.hoverString} onHoverChange={this.handleHoverChange} src={image.src} scale={image.scale} x={image.x} y={image.y} ></DraggableImage>
              ))
            ) : null})}
            {this.d2_folders.map((folder, index) => (
            <Folder src={'images/folder.png'}
              isOpen={this.state.openStates[1][index]}
              onOpen={(isOpen) => this.handleFolderOpen(index, isOpen, 1)}
              caption={folder}
              x={0}
              y={30 + 100 * index}
              scale={0.5} />
          ))}

            </>
          )

         }
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
