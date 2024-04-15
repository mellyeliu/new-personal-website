import React, { createContext, useContext, useState } from 'react';

// Define your themes
export const themeSet = ['light', 'dark', 'custom'];

// Create a context with 'light' as the default value
export const ThemeContext = createContext({
    theme: themeSet[0], // default to 'light'
    setTheme: () => { }, // a function to change the theme
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themeSet[0]); // Start with 'light'

    const cycleTheme = () => {
        const currentThemeIndex = themeSet.indexOf(theme);
        const nextThemeIndex = (currentThemeIndex + 1) % themeSet.length;
        setTheme(themeSet[nextThemeIndex]);
        console.log(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
