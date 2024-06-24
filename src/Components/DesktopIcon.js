import React, { useState, useRef, useEffect } from 'react';
import { event } from 'react-ga';


const DesktopIcon = ({ src, scale, url, x, y, isGridLayout, onHoverChange, hoverString, border, zIndex, setZIndex, triggerResize }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const minWidth = 900;
  const [width, setWidth] = useState(minWidth);
  const ref = useRef(null);

  useEffect(() => {
    handleResize(); // Call it once to get initial width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
      handleResize();
  }, [triggerResize]);

  useEffect(() => {
    handleResize(); // Call it once to get initial width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  let timer = 0;
  const delay = 300; // milliseconds
  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleResize = () => {
      const divs = document.getElementsByClassName('hover-container');
      if (divs.length > 0) {
        const divWidth = divs[0].clientWidth;
        setWidth(Math.max(divWidth, minWidth));
      }
    }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    handleClickOutside(event);

    // Attach the listeners on component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openPopupOnDoubleClick = () => {
    clearTimeout(timer);
    setClickCount(clickCount + 1);
    setIsClicked(true);

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

  const startDrag = (e) => {
    setDragging(true);
    setZIndex(zIndex + 1);
    setIsClicked(true);
    e.target.style.zIndex = zIndex;
    e.target.style.cursor = 'grabbing';
  };

  const onDrag = (e) => {
    if (dragging) {
      const container = e.target.closest('.hover-container');
      setWidth(Math.max(container.offsetWidth, minWidth));
      const deltaX = e.movementX / container.offsetWidth * 100;
      const deltaY = e.movementY / container.offsetHeight * 100;
      setPosition(prev => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY
      }));
    }
  };

  const stopDrag = (e) => {
    setIsHovered(false);
    // e.target.style.zIndex = 'auto';
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
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white overlay
    opacity: isClicked ? '1' : '0', // Show overlay when active
    transition: 'opacity 0.3s',
    pointerEvents: 'none'
  };

const startTouchDrag = (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    // Store initial touch position
    ref.current.initialTouchX = touch.clientX;
    ref.current.initialTouchY = touch.clientY;

    setDragging(true);
    setZIndex(zIndex + 1);
    e.target.style.zIndex = zIndex;
    e.target.style.cursor = 'grabbing';
  }
};

const onTouchMove = (e) => {
  //e.preventDefault();
  if (dragging && e.touches.length > 0) {
    const touch = e.touches[0];
    const container = e.target.closest('.hover-container');

    // Calculate movement based on the difference from the initial touch
    const deltaX = ((touch.clientX - ref.current.initialTouchX) / container.offsetWidth) * 100;
    const deltaY = ((touch.clientY - ref.current.initialTouchY) / container.offsetHeight) * 100;

    // Update initial touch positions for continuous movement
    ref.current.initialTouchX = touch.clientX;
    ref.current.initialTouchY = touch.clientY;
    document.querySelector('.hover-container').classList.add('no-scroll');

    setPosition(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
    }));
  }
};

const stopTouchDrag = () => {
  setDragging(false);
  onHoverChange('');
  document.querySelector('.hover-container').classList.remove('no-scroll');
  // Reset initial touch positions
  if (ref.current) {
    ref.current.initialTouchX = 0;
    ref.current.initialTouchY = 0;
  }
};

  return (
    <div style={imageContainerStyle}>
      <img
        src={src}
        style={{
          cursor: 'grab',
          position: 'absolute',
          left: `${position.x * width / 100}px`,
          minHeight: '20%',
          zIndex: 1,
          top: `${position.y}%`,
          filter: border ? 'drop-shadow(8px 8px 10px rgba(0,0,0,0.3))' : 'drop-shadow(0px 6px 5px rgba(0,0,0,0.8))',
          boxShadow: border ? '0 0 0 1px rgba(0,0,0,0.5)' : 'none',
          userSelect: 'none',
          borderRadius: '20px',
          transform: isHovered ? `scale(${scale + 0.04})` : `scale(${scale + 0.02})`,
          transition: 'transform 0.3s ease-in-out',
          transformOrigin: 'top left',
          display: 'block',
        }}
        className='draggableImage'
        onMouseDown={startDrag}
        onClick={(e) => { handleClickOutside(e); openPopupOnDoubleClick(e); }}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        // onTouchStart={startTouchDrag}
        // onTouchMove={onTouchMove}
        // onTouchEnd={stopTouchDrag}
        onMouseEnter={onHover}
        ref={ref}
        draggable={false}
      />
    </div>
  );
};

export default DesktopIcon;