import React, { useState, useEffect } from 'react';

const DraggableImage = ({ src, scale, url, x, y, isGridLayout, onHoverChange, hoverString, border }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverText = document.getElementById('hoverText');


  let timer = 0;
  const delay = 300; // milliseconds
  const [clickCount, setClickCount] = useState(0);

  const openPopupOnDoubleClick = () => {
    clearTimeout(timer);
    setClickCount(clickCount + 1);

    timer = setTimeout(() => {
      if (clickCount === 1) {
        const features = `width=400,height=250,resizable=no,scrollbars=no,left=${x + 20},top=${y + 200}`;

        // Open the popup
        if (url) {
          window.open(url, 'popupWindow', features)
        }
      }
      setClickCount(0);
    }, delay);
  };

  useEffect(() => {
    setPosition({ x, y });

  }, [x, y, isGridLayout]);

  // Function to start the drag
  const startDrag = (e) => {
    setDragging(true);
    e.target.style.zIndex = 1000;
    e.target.style.cursor = 'grabbing';
  };

  // Function to drag the image
  const onDrag = (e) => {
    if (dragging) {
      const newX = position.x + e.movementX;
      const newY = position.y + e.movementY;
      setPosition({ x: newX, y: newY });
    }
  };

  // Function to stop the drag
  const stopDrag = (e) => {
    setIsHovered(false);
    e.target.style.zIndex = 'auto';
    onHoverChange('')
    setDragging(false);
    e.target.style.cursor = 'grab';
    // hoverText.style.display = 'block';
  };

  // Function to stop the drag
  const onHover = () => {
    setIsHovered(true);
    console.log(hoverString);
    onHoverChange(hoverString);
    // hoverText.style.display = 'none';
  };

  const imageContainerStyle = {
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
  };



  return (
    <div style={imageContainerStyle}>
      {/* { border ? <input type="text" style={centeredInputStyle} placeholder="Your text here" /> : null} */}
      <img
        src={src}
        style={{
          cursor: 'grab',
          position: 'absolute',
          left: position.x,
          top: position.y,
          filter: border ? 'drop-shadow(8px 8px 10px rgba(0,0,0,0.3))' : 'drop-shadow(0px 6px 5px rgba(0,0,0,0.8))',
          boxShadow: border ? '0 0 0 1px rgba(0,0,0,0.5)' : 'none', // Red outline
          userSelect: 'none',
          borderRadius: '20px',
          // border: 'solid 1px #bbbbbb',
          transform: isHovered ? `scale(${scale + 0.02})` : `scale(${scale})`,
          transition: 'transform 0.3s ease-in-out',
          transformOrigin: 'top left', // Adjust as needed
          display: 'block',
        }}
        className='draggableImage'
        onMouseDown={startDrag}
        onClick={openPopupOnDoubleClick}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseEnter={onHover}
        draggable={false} // Prevent default browser drag behavior
      />
    </div>
  );
};

export default DraggableImage;
