import React, { useState, useEffect } from "react";

const funFacts = [
  "believes in digital intimacy",
  "unironically enjoys hyperpop",
  "is using tetris as therapy",
  "is organizing her goodreads bookshelves",
  "psychoanalyzes to feel safe",
  "is deep in a wikipedia rabbit hole",
  "has gone permanently nocturnal",
  "is outfit repeating",
  "is reading about creation myths",
  "is chilling on figma with friends",
  "is watching a movie on 2x speed",
  "only eats one food (hotpot)",
  "is doodling in ms paint",
  "is dissociating at indie concerts",
  "is trauma dumping to strangers",
  "is adding sichuan peppercorn to everything",
  "is giving stick n poke tattoos",
  "is raving about 2cb",
  "aims to create safe spaces",
  "is a shill for dimensional",
  "collects tamagotchis",
  "is attached to her notes app",
  "is writing fanfic about inanimate objects",
  "is always misplacing their keys",
];

const TypingToggleTextList = ({
  style,
  wrapper,
  textOptions = funFacts,
  speed = 30,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Clear text before typing new text

    const timer = setInterval(() => {
      if (index < textOptions[currentIndex].length) {
        setDisplayedText(
          (prev) => prev + textOptions[currentIndex].charAt(index)
        );
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [textOptions, currentIndex, speed]);

  const toggleText = () => {
    setCurrentIndex(Math.floor(Math.random() * textOptions.length));
  };

  return (
    <span style={{ ...style, cursor: "pointer" }} onClick={toggleText}>
      {wrapper ? "( " + displayedText + " [...]" + " )" : displayedText}
    </span>
  );
};

export default TypingToggleTextList;
