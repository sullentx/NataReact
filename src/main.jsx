import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import LogIn from './pages/LogIn.jsx'
import Discografia from './pages/Discografia.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/Login",
    element: <LogIn />,
  },
  {
    path: "/Discografia",
    element: <Discografia/>,
  }

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
