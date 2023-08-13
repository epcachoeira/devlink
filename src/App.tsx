// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Networks from "./pages/Networks"
import { Private } from "./routes/Private"
import { NotFound } from "./pages/NotFound"

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Private> <Admin /> </Private> },
  { path: '/admin/social', element: <Private> <Networks /> </Private> },
  { path: '*', element: <NotFound /> }
])

export { router }
