import React, { createContext, useContext, useState } from 'react';

// Define your themes
export const themeSet = ['light', 'dark', 'custom'];

// Create a context with 'light' as the default value
export const ThemeContext = createContext({
    theme: themeSet[0], // default to 'light'
    setTheme: () => { }, // a function to change the theme
    setFullScreen: () => { }, // a function to change the fullScreen state
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themeSet[0]); // Start with 'light'
    const [fullScreen, setFullScreen] = useState(false);

    const cycleTheme = () => {
        const currentThemeIndex = themeSet.indexOf(theme);
        const nextThemeIndex = (currentThemeIndex + 1) % themeSet.length;
        setTheme(themeSet[nextThemeIndex]);
        console.log(theme);
    };

    const toggleFullScreen = () => {
        setFullScreen(prevFullScreen => !prevFullScreen);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: cycleTheme, fullScreen, setFullScreen: toggleFullScreen }}>
            {children}
        </ThemeContext.Provider>
    );
};
