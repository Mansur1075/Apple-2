import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { FaBars } from "react-icons/fa";

<FaBars />
import './App.css'
import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Store from './Pages/Store';
import Layouts from './Componntes/Layouts';

let router = createBrowserRouter(createRoutesFromElements(
<Route element={<Layouts/>}>
  <Route index element={<Home/>}></Route>
  <Route path="/store" element={<Store/>}></Route>
</Route>
))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
