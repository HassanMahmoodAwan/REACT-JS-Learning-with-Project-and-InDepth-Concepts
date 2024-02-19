import React, {createContext, useContext} from 'react'


export const ThemeContext = createContext( {
    themeMode: 'light',
    lightTheme: ()=>{},
    DarkTheme: ()=> {}
})

export const ThemeContextProvider = ThemeContext.Provider

// Custom Hook for using Context
export default function useTheme(){
    return useContext(ThemeContext)
}
