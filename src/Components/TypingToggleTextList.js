import React, { useState, useEffect } from "react";

const factsAboutMyself = [
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
  wrapper = true,
  textOptions = factsAboutMyself,
  speed = 50,
  autoplay = true,
  order = false,
}) => {
  const [currentFact, setCurrentFact] = useState("");
  const [factIndex, setFactIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let typingInterval;

    if (reset) {
      setCurrentFact("");
      setCharIndex(0);
      setIsTyping(true);
      setIsPaused(false);
      setReset(false);
      return;
    }

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, 5000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (charIndex < textOptions[factIndex].length) {
          setCurrentFact((prev) => prev + textOptions[factIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setIsPaused(true);
        }
      }, speed);
    } else {
      typingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setCurrentFact((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setReset(true);
          order
            ? setFactIndex((prev) => (prev + 1) % textOptions.length)
            : setFactIndex(Math.floor(Math.random() * textOptions.length));
          setIsTyping(true);
        }
      }, speed);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, isTyping, isPaused, reset]);

  const handleClick = () => {
    setReset(true);
    order
      ? setFactIndex((prev) => (prev + 1) % textOptions.length)
      : setFactIndex(Math.floor(Math.random() * textOptions.length));
  };

  return (
    <span style={{ ...style, cursor: "pointer" }} onClick={handleClick}>
      {wrapper === true ? "( " + currentFact + " [...]" + " )" : currentFact}
    </span>
  );
};

export default TypingToggleTextList;
