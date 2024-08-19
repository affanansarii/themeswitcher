// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';

const lightTheme = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    buttonBackground: '#6200ea',
    buttonColor: '#ffffff',
    borderColor: '#cccccc',
};

const darkTheme = {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    buttonBackground: '#bb86fc',
    buttonColor: '#000000',
    borderColor: '#444444',
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
