import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "dark";
  });
  
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  
    const toogleTheme = () => setIsDarkMode(!isDarkMode);

    return (
    <>
        <ThemeContext.Provider value={{isDarkMode, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => useContext(ThemeContext);