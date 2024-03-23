import React, { useState, useEffect } from 'react';

const TypingToggleTextList = ({ style, wrapper, textOptions = ["First Text", "Second Text", "Third Text"], speed = 50 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Clear text before typing new text

    const timer = setInterval(() => {
      if (index < textOptions[currentIndex].length) {
        setDisplayedText((prev) => prev + textOptions[currentIndex].charAt(index));
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [textOptions, currentIndex, speed]);

  const toggleText = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % textOptions.length);
  };

  return (
    <span style={{...style, cursor: 'pointer'}} onClick={toggleText}>
      {wrapper ? "( " + displayedText + " [...]" + " )" : displayedText}
    </span>
  );
};

export default TypingToggleTextList;
