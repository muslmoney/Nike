import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './pages/Products.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Jordan from './pages/Jordan.jsx'
import Bag from './pages/Bag.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
       path: 'products',
       element : <Products />
      },
      {
       path: '*',
       element : <NotFound/>
      },
      {
        path: 'jordan',
        element : <Jordan />
       },
       
      //  {
      //   path: 'profile',
      //   element : <Profile />
      //  },
         {
        path: 'bag',
        element : <Bag />
       },
      //  {
      //   path: 'favourites',
      //   element : <Fav />
      //  }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
