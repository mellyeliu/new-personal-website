import React, { useState, useRef, useEffect } from "react";
import { startData } from "../Data/StartData";

const StartButton = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
      setSelectedOption(null);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  useEffect(() => {
    if (buttonRef.current && isDropdownVisible) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownTop(buttonRect.top);
    }
  }, [isDropdownVisible]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setSelectedOption(null);
  };

  const showDropDown = (show) => {
    setDropdownVisible(show);
  };

  const tabStyle = {
    color: "black",
    fontWeight: "500",
    fontStyle: "italic",
    bottom: 50,
    cursor: "pointer",
    paddingLeft: 20,
    borderRight: "0.5px solid black",
  };

  const buttonStyle = {
    padding: "8px 12px",
    display: "block",
    // background: "rgb(245 245 245)",
    cursor: "pointer",
    fontStyle: "normal",
    letterSpacing: 0.5,
    color: "black",
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "flex-start",
    },
    verticalBlock: {
      background: "linear-gradient(to top, #888, #ddd)",
      padding: "1px",
      textAlign: "center",
      lineHeight: "40px",
      alignItems: "center",
      justifyContent: "center",
      borderRight: "0.5px solid black",
      cursor: "default",
    },
    verticalText: {
      color: "white",
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      // fontFamily: "Arial, sans-serif",
      fontSize: "18px",
      fontStyle: "italic",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      marginTop: "90px",
      // verticalAlign: "center",
    },
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        ref={buttonRef}
        onClick={toggleDropdown}
        className="hvr-shade"
        style={{
          ...tabStyle,
          cursor: "pointer",
          height: 50,
          paddingTop: "10px",
          marginLeft: "20px !important",
          fontWeight: 500,
          background: isDropdownVisible ? "#ddd" : "none",
        }}
      >
        <span style={{ fontWeight: 500 }}>✧</span> Start &nbsp; &nbsp;
      </div>
      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          style={{
            display: "flex",
            position: "fixed",
            left: 0,
            letterSpacing: 0,
            bottom: 50,
            background: "rgb(235 235 235)",
            borderTop: "0.5px solid black",
            borderLeft: "0.5px solid black",
            borderRight: "0.5px solid black",
            borderBottom: "0.5px solid black",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            minWidth: "120px",
            zIndex: 1,
          }}
        >
          <div style={styles.verticalBlock}>
            <span style={styles.verticalText}>@mellye.liu</span>
          </div>
          <div className="options" style={{ flex: 1 }}>
            {Object.keys(startData).map((option, index) => (
              <a
                key={index}
                className="hvr-shade"
                style={{
                  ...buttonStyle,
                  background: selectedOption === option ? "#ddd" : "none",
                }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
          {selectedOption && startData[selectedOption].length !== 0 && (
            <div
              className="side-panel"
              style={{
                position: "absolute",
                left: 142,
                bottom: 50,
                width: "200px",
                height: "auto",
                backgroundColor: "#fff",
                border: "0.5px solid black",
                zIndex: 2,
              }}
            >
              <ul>
                {startData[selectedOption].map((subOption, index) => (
                  <a
                    key={index}
                    target="_blank"
                    style={{ color: "black" }}
                    href={subOption[1]}
                    rel="noreferrer"
                  >
                    <li
                      className="hvr-shade"
                      style={{
                        cursor: "pointer",
                        fontStyle: "normal",
                        letterSpacing: -0.3,
                        textAlign: "left",
                        color: "black",
                        padding: "2px 10px",
                      }}
                    >
                      {subOption[0]}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StartButton;
