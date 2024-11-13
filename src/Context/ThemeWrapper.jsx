import React from 'react'
import { useState , useEffect } from 'react'
import { ThemeContext , themes} from './ThemeContext'

export default function ThemeWrapper({ children }) {

    const [theme , setTheme] = useState(themes.light);

    function changeTheme (newTheme) {
        setTheme(newTheme);
    }

    useEffect(() => {
        document.body.classList = `${theme}-theme`;
    } , [theme]);

  return (
    <ThemeContext.Provider value={{theme : theme , changeTheme : changeTheme}}>

        {children}

        </ThemeContext.Provider>
  )
}
