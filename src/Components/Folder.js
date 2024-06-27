import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const Folder = ({
  src,
  scale,
  x,
  y,
  hoverString,
  onHoverChange,
  caption,
  isOpen,
  onOpen,
  isVisible,
}) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onOpen(!isOpen);
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
    onHoverChange("");
    setDragging(false);
    // hoverText.style.display = 'block';
  };

  return (
    <div
      onClick={handleClick}
      className="folderIcon"
      style={{
        position: "fixed",
        cursor: "pointer",
        right: 10,
        filter: "drop-shadow(0px 6px 6px rgba(0,0,0,0.4))",
        top: position.y,
        userSelect: "none",
        zIndex: 100,
        display: "block",
        transform: `scale(${scale})`,
      }}
    >
      <img
        src={isOpen ? "/images/folderNewOpen.png" : "/images/folder.png"}
        onMouseLeave={stopHover}
        onMouseEnter={onHover}
        className="folder"
        draggable={false}
      />
      {caption && (
        <div
          className="folderText"
          style={{
            fontSize: 28,
            color: "black",
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            fontWeight: isOpen ? "500" : "400",
            fontColor: "#111111",
          }}
        >
          {caption}
        </div>
      )}{" "}
      {/* Render caption if it is provided */}
    </div>
  );
};

export default Folder;
