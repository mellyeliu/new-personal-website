import React, { useState, useRef, useEffect } from "react";
import { event } from "react-ga";
import TextCursor from "./TextCursor";
import { isMobile } from "react-device-detect";
import PortfolioData from "../Data/PortfolioData";

const DesktopIcon = ({
  src,
  scale,
  url,
  x,
  y,
  isGridLayout,
  onHoverChange,
  hoverString,
  border,
  zIndex,
  setZIndex,
  setShowCursor,
  triggerResize,
}) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const minWidth = 900;
  const [width, setWidth] = useState(minWidth);
  const ref = useRef(null);

  const [mobileWidth, setMobileWidth] = useState(window.screen.width);

  const [imageSize, setImageSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width + "px", height: img.height + "px" });
    };
    img.src = src;
  }, [src]);

  useEffect(() => {
    const handleResize = () => setMobileWidth(window.screen.width);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, [triggerResize]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let timer = 0;
  const delay = 300; // milliseconds
  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleResize = () => {
    const divs = document.getElementsByClassName("hover-container");
    if (divs.length > 0) {
      const divWidth = divs[0].clientWidth;
      setWidth(Math.max(divWidth, minWidth));
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    handleClickOutside(event);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openPopupOnDoubleClick = () => {
    clearTimeout(timer);
    setClickCount(clickCount + 1);
    setIsClicked(true);

    timer = setTimeout(() => {
      if (clickCount === 1) {
        const features = `width=400,height=250,resizable=no,scrollbars=no,left=${
          x + 20
        },top=${y + 200}`;

        if (url) {
          window.open(url, "popupWindow", features);
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
    setIsHovered(true);
    setZIndex(zIndex + 1);
    setIsClicked(true);
    e.target.style.zIndex = zIndex;
    e.target.style.cursor = "grabbing";
  };

  const onDrag = (e) => {
    if (dragging) {
      const container = e.target.closest(".hover-container");
      setWidth(Math.max(container.offsetWidth, minWidth));
      const deltaX = (e.movementX / container.offsetWidth) * 100;
      const deltaY = (e.movementY / container.offsetHeight) * 100;
      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
    }
  };

  const stopDrag = (e) => {
    setIsHovered(false);
    onHoverChange("");
    setDragging(false);
    e.target.style.cursor = "grab";
    // hoverText.style.display = 'block';
  };

  // Function to stop the drag
  const onHover = () => {
    setIsHovered(true);
    if (!border) {
      setShowCursor("double click me!");
    }
    onHoverChange(hoverString);
    // hoverText.style.display = 'none';
  };

  const stopHover = (e) => {
    setIsHovered(false);
    setShowCursor("");
    onHoverChange("");
    setDragging(false);
    e.target.style.cursor = "grab";
  };

  const imageContainerStyle = {
    width: "auto",
    height: "auto",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.5)", // Semi-transparent white overlay
    opacity: isClicked ? "1" : "0", // Show overlay when active
    transition: "opacity 0.3s",
    pointerEvents: "none",
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
      e.target.style.cursor = "grabbing";
    }
  };

  const onTouchMove = (e) => {
    if (dragging && e.touches.length > 0) {
      const touch = e.touches[0];
      const container = e.target.closest(".hover-container");

      const deltaX =
        ((touch.clientX - ref.current.initialTouchX) / mobileWidth) * 50;
      const deltaY =
        ((touch.clientY - ref.current.initialTouchY) / container.offsetHeight) *
        100;

      ref.current.initialTouchX = touch.clientX;
      ref.current.initialTouchY = touch.clientY;
      document.querySelector(".hover-container").classList.add("no-scroll");

      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
    }
  };

  const stopTouchDrag = () => {
    setDragging(false);
    onHoverChange("");
    document.querySelector(".hover-container").classList.remove("no-scroll");
    // Reset initial touch positions
    if (ref.current) {
      ref.current.initialTouchX = 0;
      ref.current.initialTouchY = 0;
    }
  };
  const transformString = border
    ? isHovered
      ? `scale(${scale + 0.04})`
      : `scale(${scale + 0.02})`
    : isHovered
    ? `scale(${scale + 0.04})`
    : `scale(${scale + 0.02})`;

  const hoverText = `find me at: 

ig // mellye.liu
vsco // mellyeliu
reading.supply // mellyeliu
goodreads // mellyeliu
spotify // mellye.liu
dimensional // mellyeliu`;

  return (
    <div style={imageContainerStyle}>
      <div
        style={{
          cursor: "grab",
          position: "absolute",
          left: `${(position.x * width) / 100}px`,
          minHeight: "20%",
          zIndex: 1,
          top: `${position.y}%`,
          filter: border
            ? "drop-shadow(8px 8px 10px rgba(0,0,0,0.3))"
            : "drop-shadow(0px 6px 5px rgba(0,0,0,0.8))",
          boxShadow: border ? "0 0 0 1px rgba(0,0,0,0.5)" : "none",
          userSelect: "none",
          borderRadius: "20px",
          transform: `scale(0.5)`,
          transition: "transform 0.3s ease-in-out",
          transformOrigin: "top left",
          display: isMobile && hoverString === "( Socials )" ? "none" : "block",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...imageSize,
        }}
        className="draggableImage"
        onMouseDown={startDrag}
        onClick={(e) => {
          handleClickOutside(e);
          openPopupOnDoubleClick(e);
        }}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopHover}
        onTouchStart={startTouchDrag}
        onTouchMove={onTouchMove}
        onTouchEnd={stopTouchDrag}
        onMouseEnter={onHover}
        ref={ref}
      >
        {hoverString === "( Socials )" && (
          <div
            style={{
              justifyContent: "left",
              whiteSpace: "pre-wrap",
              alignItems: "left",
              color: "black",
              fontSize: "18px",
              textAlign: "left",
              lineHeight: "1.1",
              padding: "170px 20px",
              fontFamily: "Arimo",
              zIndex: 1000000,
              pointerEvents: "none",
            }}
          >
            find me at:
            <br />
            <br />
            {PortfolioData.main.social.map((item, index) => (
              <>
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    pointerEvents: "auto",
                    color: "black", // Adjust color as needed
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  {item.name}
                </a>
                <div />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopIcon;
