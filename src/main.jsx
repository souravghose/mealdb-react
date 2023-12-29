import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Restaurants from './components/Restaurants/Restaurants.jsx';
import Homebody from './components/HomeBody/Homebody.jsx';
import Menus from './components/Menus/Menus.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        element: <Homebody></Homebody>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/restaurants',
        element: <Restaurants></Restaurants>,
        loader: () => fetch('https://souravghose.github.io/restaurant--api/data.json'),

      },
      {
        path: '/menu/:id',
        element: <Menus></Menus>,
        loader: ({params}) => {
          const data = fetch('https://souravghose.github.io/restaurant--api/data.json')
            .then(res => res.json())
            .then(data => data.find(item => item.id === parseInt(params.id)));
          return data;
        }
      },
      {

      }
    ]
     
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
