import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Productsoverview from './Components/Productsoverview.jsx';
import Home from './Components/Home.jsx';
import Product from './Components/Product.jsx';
import { Store } from './Store/Store.js';
import { Provider } from 'react-redux';
import Signup from './Components/Signup.jsx';
import Cart from './Components/Cart.jsx';
import Login from './Components/Login.jsx';
import Protectedroute from './Components/Protectedroute.jsx';



import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Protectedroute />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Productsoverview />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
