import React, { useEffect, useState } from 'react';

const AsciiArtBackground = () => {
  // Generate bunnies with positions for 10 rows and 10 columns
  const generateBunnies = () => {
    const bunnies = [];
    const numRows = 10;
    const numCols = 10;
    const spacingX = 240; // Horizontal space between bunnies
    const spacingY = 10; // Vertical space between bunnies

    for (let i = 0; i < numRows * numCols; i++) {
      const row = Math.floor(i / numCols);
      const col = i % numCols;

      bunnies.push({
        art: String.raw`
        ૮₍´˶• . • ⑅ ₎ა`,
        position: {
          left: col * spacingX + (i / numCols) * 30,
          top: row * spacingY,
        },
        opacity: 1 - (i / numCols) * 0.1, // Initial opacity
      });
    }

    return bunnies;
  };

  const [bunnies, setBunnies] = useState(generateBunnies());

  useEffect(() => {
    const moveBunnies = () => {
      setBunnies((currentBunnies) =>
        currentBunnies.map((bunny) => {
          // Calculate new opacity based on position
          // const newOpacity = Math.max(0.5, bunny.opacity - 0.01); // Ensure opacity doesn't go below 0.5

          return {
            ...bunny,
            position: {
              ...bunny.position,
              left: bunny.position.left - 1, // Move each bunny left
            },
            opacity: bunny.opacity,
          };
        })
      );
    };

    const intervalId = setInterval(moveBunnies, 50); // Adjust for speed

    // Reset bunnies to the right after they exit the screen
    const resetIfNeeded = () => {
      setBunnies((currentBunnies) =>
        currentBunnies.map((bunny) => {
          if (bunny.position.left < -200) { // Assuming each bunny is no wider than 200px
            return {
              ...bunny,
              position: {
                ...bunny.position,
                left: window.innerWidth + (200 - Math.abs(bunny.position.left)), // Reset to the right of the screen
              },
            };
          }
          return bunny;
        })
      );
    };

    const resetIntervalId = setInterval(resetIfNeeded, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
      clearInterval(resetIntervalId);
    };
  }, []);

  // Inline styles for the container and individual bunnies
  const containerStyle = {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    whiteSpace: 'pre',
    fontSize: 30,
    fontFamily: 'monospace',
    pointerEvents: 'none',
  };

  const bunnyStyle = (position, opacity) => ({
    position: 'absolute',
    width: 300,
    opacity: opacity,
    left: `${position.left}px`,
    top: `${position.top}vh`, // Changed to viewport height for better vertical distribution
  });

  return (
    <div style={containerStyle}>
      {bunnies.map((bunny, index) => (
        <div key={index} style={bunnyStyle(bunny.position, bunny.opacity)}>
          {bunny.art}
        </div>
      ))}
    </div>
  );
};

export default AsciiArtBackground;
