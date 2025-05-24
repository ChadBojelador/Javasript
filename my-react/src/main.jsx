import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Dashboard from './Dashboard.jsx'
import DashboardItems from './DashboardItems.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Link } from 'react-router-dom';
const router = createBrowserRouter([ 
   {path:"/",element:<App/>},
   {path:"/dashboard",element:<Dashboard/>},
   {path:"/about",element:<About/>},
   {path:"/dashboard/:id",element:<DashboardItems/>}
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
