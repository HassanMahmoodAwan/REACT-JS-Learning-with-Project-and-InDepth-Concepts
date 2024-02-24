import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

import RouterLayout from "./RouterLayout"
import { CurrencyConverter, Home, Pass_Generator } from "./components"
import './App.css'


function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout />}>
        
        <Route path="" element={<Home />}/>
        <Route path="pass_Generator" element={<Pass_Generator/>} />
        <Route path="curr_Converter" element = {<CurrencyConverter />} />

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
