'use client'
import {createContext, useContext,useState} from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider ({children} : {children : React.ReactNode}){
    const [theme,setTheme] = useState("dark");

    const toggleTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300`}>
        {children}
         </div>
        </ThemeContext.Provider>
        </>
    )
}

export const useTheme = () => useContext(ThemeContext);