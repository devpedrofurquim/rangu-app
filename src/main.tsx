import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation} from "react-router-dom";
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Error from './pages/Error';
import './index.css'
import Cuisine from './pages/Cuisine';
import Search from './pages/Search';
import Recipe from './pages/Recipe';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: `restaurante/:restauranteName`,
    element: <Restaurant/>
  },
  {
    path: `cuisine/:type`,
    element: <Cuisine/>
  },
  {
    path: `search/:search`,
    element: <Search/>
  },
  {
    path: `recipe/:id`,
    element: <Recipe/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router}/>
    </AnimatePresence>
  </React.StrictMode>,
)
