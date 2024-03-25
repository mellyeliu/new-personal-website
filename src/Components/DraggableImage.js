import React, { useState } from 'react';

const DraggableImage = ({ src, scale, x, y, onHoverChange, hoverString, border }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverText = document.getElementById('hoverText');

  // Function to start the drag
  const startDrag = (e) => {
    setDragging(true);
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

  // const onLeave = (e) => {
  //   setIsHovered(false);
  // };



  return (
    <img
      src={src}
      style={{
        cursor: 'grab',
        position: 'absolute',
        left: position.x,
        top: position.y,
        filter: 'drop-shadow(8px 8px 6px rgba(0,0,0,0.4))',
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
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseEnter={onHover}
      draggable={false} // Prevent default browser drag behavior
    />
  );
};

export default DraggableImage;
