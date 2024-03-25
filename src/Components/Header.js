import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'
import DraggableImage from './DraggableImage';
import Folder from './Folder'
import ImageIcon from './ImageIcon';
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

  websiteProps = [
    {hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
    src: 'images/kaomoji.png',
    scale: 0.42,
    border: true,
    x: 800,
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
    {hoverString: "( Kingdom of Loathing )",
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
    x: 680,
    y: 320},
    {hoverString: "Fantage",
    src: 'images/fantage.png',
    scale: 0.55,
    x: 820,
    y: 370},
    {hoverString: "Loved",
    src: 'images/loved.png',
    scale: 0.55,
    x: 810,
    y: 310},
    {hoverString: "Rational Wiki",
    src: 'images/rational.png',
    scale: 0.55,
    x: 760,
    y: 390},
    {hoverString: "TRShady",
    src: 'images/trshady.png',
    scale: 0.45,
    x: 820,
    y: 450},
    {hoverString: "are.na",
    src: 'images/arena.png',
    scale: 0.55,
    x: 610,
    y: 390},
    {hoverString: "( Girlhood )",
    src: 'images/emojis.png',
    scale: 0.48,
    border: true,
    x: 640,
    y: 40},
    {hoverString: "( Edit Wars )",
    src: 'images/wiki.png',
    scale: 0.55,
    x: 530,
    y: 40},
    {hoverString: "( 🌐🤍🎀🫧 )",
    src: 'images/internet.png',
    scale: 0.4,
    border: true,
    x: 140,
    y: 310},
  ]

  render() {
    if(this.props.data){
      var art = this.props.data.photos.map(function(photo, i){
        var imageSrc = 'images/'+photo.image;
        return  <div key={photo.date} className="hover-container" >
          <img id="headerpic" src={imageSrc}></img>
          {(i === 0) ? (
            <>
          {this.websiteProps.map((image) => (

            // <ImageIcon hoverString={image.hoverString} caption="neopets" onHoverChange={this.handleHoverChange} src={image.src} scale={image.scale} x={image.x} y={image.y} />

            <DraggableImage border={image.border ? true: false} hoverString={image.hoverString} onHoverChange={this.handleHoverChange} src={image.src} scale={image.scale} x={image.x} y={image.y} ></DraggableImage>

          )

          )}
          {/* <DraggableImage hoverString={"૮꒰ ˶• ༝ •˶꒱ა ♡"} onHoverChange={this.handleHoverChange} src={'images/kaomoji.png'} scale={0.45} x={800} y={400} ></DraggableImage>
           <DraggableImage  hoverString={"archiveofourown.org"} onHoverChange={this.handleHoverChange} src={'images/ao3.png'} scale={0.45} x={150} y={70} ></DraggableImage>
          <DraggableImage  hoverString={"www.neopets.com"} onHoverChange={this.handleHoverChange} src={'images/neopets.png'} scale={0.4} x={20} y={230} ></DraggableImage>
          <DraggableImage  hoverString={"www.tvtropes.org"} onHoverChange={this.handleHoverChange} src={'images/tvtropes.png'} scale={0.27} x={370} y={110} ></DraggableImage>
          <DraggableImage  hoverString={"( Kingdom of Loathing )"} onHoverChange={this.handleHoverChange} src={'images/kol.png'} scale={0.3} x={240} y={40} ></DraggableImage>
          <DraggableImage  hoverString={"( Girlhood )"} onHoverChange={this.handleHoverChange} src={'images/emojis.png'} scale={0.4} x={620} y={60} ></DraggableImage>
          <DraggableImage  hoverString={"( Edit Wars )"} onHoverChange={this.handleHoverChange} src={'images/wiki.png'} scale={0.2} x={470} y={150} ></DraggableImage>
          <DraggableImage  hoverString={"( 🌐🤍🎀🫧 )"} onHoverChange={this.handleHoverChange} src={'images/internet.png'} scale={0.4} x={270} y={310} ></DraggableImage> */}
          <Folder src={'images/folder.png'} caption="Games" hoverString={"www.tvtropes.org"} x={0} y={30} scale={0.5} />
          <Folder src={'images/folder.png'} caption="Fandoms" hoverString={"www.tvtropes.org"} x={0} y={120} scale={0.5} />
          <Folder src={'images/folder.png'} caption="Tools" hoverString={"www.tvtropes.org"} x={0} y={210} scale={0.5} />
          </>
          ) : (
            <></>
          //   <>
          //   <DraggableImage  hoverString={"( 🌐🤍🎀🫧 )"} onHoverChange={this.handleHoverChange} src={'images/internet.png'} scale={0.4} x={270} y={310} ></DraggableImage>
          //   <Folder src={'images/folder.png'} caption="Games" hoverString={"www.tvtropes.org"} x={850} y={30} scale={0.5} />
          // <Folder src={'images/folder.png'} caption="Fandoms" hoverString={"www.tvtropes.org"} x={850} y={120} scale={0.5} />
          // <Folder src={'images/folder.png'} caption="Tools" hoverString={"www.tvtropes.org"} x={850} y={210} scale={0.5} /></>
          )

         }
          {/* <div className="bottom-left">{this.state.isChildHovered}</div> */}
          {/* <div id="header-hover" className="hover-text">&#40; 🌐🤍🎀🫧 &#41;</div> */}
          {this.state.isChildHovered === '' ? <div className="bottom-left">{photo.place} </div> : <div id="header-hover" className="bottom-left">{this.state.isChildHovered} </div>}
        {/* <div className="hover-text">This is the text displayed on hover</div> */}
        </div>
      }, this)
    }
    return (
      <><Nav data={this.props.data} title='Mellye.liu' subtitle='Code / Writing / Art' /><header id="home">
        <div className="banner" >
          <div className="container" style={{ zIndex: 1000000 }}>
          {/* <div onClick={this.toggleButton}  className="top-left">{!this.state.isActive ? (<span id="play-button">&#40; Paused &#41;</span>) : (<span id="play-button">	&#40; Play &#41;</span>)} </div> */}

            <div onClick={this.toggleButton}  className="top-left">{this.state.isActive ? (<span id="play-button">&#40; Pause &nbsp;<i style={{ fontSize: 8 }} class="fas fa-pause"></i> &#41;</span>) : (<span id="play-button">	&#40; Play &nbsp;<i style={{ fontSize: 8 }} class="fas fa-play"></i> &#41;</span>)} </div>
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
