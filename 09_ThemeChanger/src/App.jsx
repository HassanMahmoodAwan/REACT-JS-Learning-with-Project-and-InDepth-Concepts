import { useState } from "react"
import { ThemeContextProvider } from "./context/ThemeContext"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add("light")

  }
  const DarkTheme = ()=>{
    document.querySelector('html').classList.remove("light", "dark")
    // setThemeMode('dark')
    document.querySelector('html').classList.add("dark")

  }
  
  // document.querySelector('html').classList.add("bg-black")

  return (
<ThemeContextProvider value={{themeMode, lightTheme, DarkTheme}}> 
  <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
             <Card />
          </div>
      </div>
  </div>
</ThemeContextProvider> 
  )
}

export default App
