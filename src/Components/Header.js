import React, { useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';
import Nav from './Nav'
import DesktopIcon from './DesktopIcon';
import Folder from './Folder'
import FileData from '../Data/FileData'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import { ThemeContext } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = (props) => {
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [isChildHovered, setIsChildHovered] = useState("");
  const [openStates, setOpenStates] = useState({ 0: [true, false, true, true] });
  const [zIndex, setZIndex] = useState(1);
  const { fullScreen, setFullScreen } = useContext(ThemeContext);
  const [triggerResize, setTriggerResize] = useState(false);

  const handleFullScreenClick = () => {
    setTriggerResize(prevState => !prevState);
  };


  const handleFolderOpen = (index, isOpen, key) => {
    setOpenStates(prevOpenStates => {
      const newOpenStates = { ...prevOpenStates };
      newOpenStates[key][index] = isOpen;
      return newOpenStates;
    });
  };

  const toggleButton = () => {
    setIsGridLayout(prevIsGridLayout => !prevIsGridLayout);
  }

  const handleHoverChange = (hoverState) => {
    setIsChildHovered(hoverState);
  };

  const folders = ['Games', 'Fandoms', 'Wikis', 'About Me'];
  const display_folders = ['games', 'fandoms', 'wikis', 'About Me'];
  const display_strings = ['( Gamemaking as playing god )', '( Collecting obsessions )', '( Can we build a collective truth ? )', '( Autofiction as always )'];
  let alignX = 0;
  let alignY = 30;
  let counter = 0

    if (props.data) {
      counter = 0;
      alignX = 0;
      alignY = 25;
      var art = props.data.photos.map(function (photo, i) {
        var imageSrc = 'images/' + photo.image;
        return <div key={photo.date} className="hover-container" >
          <img style={{ opacity: 0 }} id="headerpic" draggable="false" src={imageSrc}></img>

          {display_folders.map((folder, ind) => {
            return openStates && openStates[0][ind] || false ? (
              FileData[folder].map((image, index) => {
                if (!image.border) {
                  alignY = (counter % 5 === 0) ? 10 : alignY + 16;
                  alignX = (counter % 5 === 0) ? alignX + 10 : alignX;
                  if (counter === 0) {
                    alignX = 5;
                  }
                  counter++;
                }
                return (image.border && isGridLayout) ? <></> : (<DesktopIcon
                  url={image.url}
                  setZIndex={setZIndex}
                  zIndex={zIndex}
                  border={image.border ? true : false}
                  hoverString={image.hoverString}
                  onHoverChange={handleHoverChange}
                  src={image.src} scale={image.scale}
                  x={isGridLayout ? alignX : image.x}
                  y={isGridLayout ? alignY : image.y}
                  triggerResize={triggerResize}
                  isGridLayout={isGridLayout}
                ></DesktopIcon>)

              })
            ) : null
          })}
          {folders.map((folder, index) => {
            return (
              <Folder src={'images/folder.png'}
                isOpen={openStates[0][index]}
                onOpen={(isOpen) => handleFolderOpen(index, isOpen, 0)}
                hoverString={display_strings[index]}
                onHoverChange={handleHoverChange}
                caption={folder}
                x={0}
                y={150 + 100 * index}
                scale={0.5} />
            )
          })}
          {isChildHovered === '' ? <div className="bottom-left">{photo.place} </div> : <div id="header-hover" className="bottom-left">{isChildHovered} </div>}
        </div>
      }, this)
    }

    return (
      <>
        <header id="home">
          <Fade duration={1000} delay={500}>
            <div className="banner" style={{
              transition: 'height 1s ease',
              display: 'inline-block',
              margin: '0px auto',
              padding: fullScreen ? '0px' : '100px 0px 50px 0px',
              width: fullScreen ? '100%' : '90%',
              maxWidth: fullScreen ? '100%' : '1150px',
              textAlign: 'center',
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
            }}>
              <div className="bottom-left-2" style={{top: fullScreen ? '20px' : '120px', display: 'none'}}> &#40; 🌐🌷 &#41; </div>
              <div onClick={() => {setFullScreen();handleFullScreenClick();}} className="bottom-right" style={{bottom: fullScreen ? '15px' : '70px'}}>
                <span style={{ zIndex: 1000,  cursor: 'pointer'  }}>
                &#40; F5 &#41;
                {/* &#x2194; */}
                </span>

                </div>
                <div className="bottom-leftt" style={{bottom: fullScreen ? '15px' : '70px'}}>
                <span style={{ zIndex: 1000,  cursor: 'pointer'  }}>
                &#40; ⋆𐙚₊˚⊹♡ &#41;
                {/* &#x2194; */}
                </span>

                </div>
              <div className="container" style={{ zIndex: 1 }}>
                <div onClick={toggleButton} className="top-left">
                  {
                  isGridLayout ? (
                    <span id="play-button">&#40; Shuffle <i style={{ fontSize: 11 }} class="fa fa-random" aria-hidden="true"></i>&#41;</span>)
                    : (<span id="play-button">	&#40; Sort &nbsp;<i style={{ fontSize: 8 }} className="fas fa-play"></i> &#41;</span>)} </div>
              </div>
              {/* <Carousel wrapAround={true} transitionMode='fade' dragging={false} swiping={false}
                defaultControlsConfig={{ pagingDotsStyle: { display: 'none' },
                 prevButtonStyle: { display: 'none' }, nextButtonStyle: { display: 'none' } }} pauseOnHover={true} autoplayInterval={3000} enableKeyboardControls={false}> */}
                {art}
              {/* </Carousel> */}
            </div>
          </Fade>
        </header></>
    );

}

export default Header;
