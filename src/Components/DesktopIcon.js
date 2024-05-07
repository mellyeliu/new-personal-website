import React, { useState, useEffect } from 'react';

const DesktopIcon = ({ src, scale, url, x, y, isGridLayout, onHoverChange, hoverString, border }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const minWidth = 900;
  const [width, setWidth] = useState(minWidth);
  // const container = e.target.closest('.slider-frame');
  // console.log(container);
  // container.offsetWidth = container.offsetWidth > 800 ? container.offsetWidth : 800;
  // const hoverText = document.getElementById('hoverText');

  useEffect(() => {
    function handleResize() {
    const divs = document.getElementsByClassName('slider-frame');
    if (divs.length > 0) {
      const divWidth = divs[0].clientWidth;
      setWidth(Math.max(divWidth, minWidth));
    }
  }
    handleResize(); // Call it once to get initial width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
        const container = e.target.closest('.slider-frame');
        setWidth(Math.max(container.offsetWidth, minWidth));
        // container.offsetWidth = container.offsetWidth > 800 ? container.offsetWidth : 800;
        const deltaX = e.movementX / container.offsetWidth * 100;
        const deltaY = e.movementY / container.offsetHeight * 100;
        setPosition(prev => ({
            x: prev.x + deltaX,
            y: prev.y + deltaY
        }));
      // const newX = position.x + e.movementX;
      // const newY = position.y + e.movementY;
      // setPosition({ x: newX, y: newY });
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
      <img
        src={src}
        style={{
          cursor: 'grab',
          position: 'absolute',
          // marginLeft: '5%',
          // marginTop: '4%',
          left: `${position.x * width / 100}px`,
          minHeight: `${15}%`,
          // minWidth: `${15}%`,
          top: `${position.y}%`,
          filter: border ? 'drop-shadow(8px 8px 10px rgba(0,0,0,0.3))' : 'drop-shadow(0px 6px 5px rgba(0,0,0,0.8))',
          boxShadow: border ? '0 0 0 1px rgba(0,0,0,0.5)' : 'none', // Red outline
          userSelect: 'none',
          borderRadius: '20px',
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

export default DesktopIcon;
