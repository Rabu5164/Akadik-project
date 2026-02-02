import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Shop from './pages/shoppage/Shop.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:  <Home/>,
      },
      {
        path:"/about",
        element:  <About/>,
      },
      {
        path:"/contact",
        element:  <Contact/>,
      },
       {
        path:"/shoppage",
        element: <Shop/>,
      }
    ],


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


