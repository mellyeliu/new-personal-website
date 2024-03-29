import React, { useState } from 'react';

const ImageIcon = ({ src, scale, x, y, onHoverChange, hoverString, caption }) => {
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


  return (
    <div style={{
        cursor: 'grab',
        position: 'absolute',
        left: position.x,
        top: position.y,
        userSelect: 'none',
        display: 'block',
        transform: `scale(${scale})`
      }}>
    <img
      src={src}
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseEnter={onHover}
      draggable={false} // Prevent default browser drag behavior
    />
    {caption && <div style={{fontSize: 28, color: 'black', fontFamily: "Cormorant Garamond", fontStyle: 'italic'}}>{caption}</div>} {/* Render caption if it is provided */}
    </div>
  );
};

export default ImageIcon;
