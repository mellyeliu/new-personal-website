import React, { useState } from 'react';

const ToggleTextList = ({ style, textOptions = ["First Text", "Second Text", "Third Text"] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleText = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % textOptions.length);
  };

  return (
    <div onClick={toggleText} style={style}>
      {"( " + textOptions[currentIndex] + " [...]" + " )"}
    </div>
  );
};

export default ToggleTextList
