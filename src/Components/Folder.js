import React, { useState } from 'react';

const Folder = ({ src, scale, x, y, hoverString, onHoverChange, caption, isOpen, onOpen }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Toggle the state based on the prop and notify the parent
    onOpen(!isOpen);
  };

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

  const onHover = () => {
    setIsHovered(true);
    console.log(hoverString);
    onHoverChange(hoverString);
    // hoverText.style.display = 'none';
  };

  // Function to stop the drag
  const stopHover = (e) => {
    setIsHovered(false);
    onHoverChange('')
    setDragging(false);
    // hoverText.style.display = 'block';
  };

  // Function to stop the drag
  const stopDrag = (e) => {
    setDragging(false);
    e.target.style.cursor = 'grab';
    // hoverText.style.display = 'block';
  };

  // const onLeave = (e) => {
  //   setIsHovered(false);
  // };



  return (
    <div
      onClick={handleClick}
      className="folderIcon"
      style={{
        position: 'fixed',
        cursor: 'pointer',
        right: 10,
        filter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.4))',
        top: position.y,
        userSelect: 'none',
        display: 'block',
        transform: `scale(${scale})`
      }}>
      <img
        src={isOpen ? '/images/folderNewOpen.png' : '/images/folder.png'}
        onMouseLeave={stopHover}
        onMouseEnter={onHover}
        // onMouseDown={startDrag}
        // onMouseMove={onDrag}
        // onMouseUp={stopDrag}
        // onMouseLeave={stopDrag}
        className="folder"
        draggable={false} // Prevent default browser drag behavior
      />
      {caption && <div className="folderText" style={{ fontSize: 28, color: 'black', fontFamily: "Cormorant Garamond", fontStyle: 'italic', fontWeight: isOpen ? '500' : '400', fontColor: '#111111' }}>{caption}</div>} {/* Render caption if it is provided */}
    </div>
  );
};

export default Folder;
