import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import NotFound from './pages/NotFound.jsx';
import Jordan from './pages/Jordan.jsx';
import Bag from './pages/Bag.jsx';
import Product from './pages/Product.jsx'
import Favourites from './pages/Favourites.jsx';


const router = createBrowserRouter([
 
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'jordan',
        element: <Jordan />,
      },
 

      //  {
      //   path: 'profile',
      //   element : <Profile />
      //  },
      {
        path: 'bag',
        element: <Bag />,
      },
       {
        path: 'favourites',
        element : <Favourites />
       }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
