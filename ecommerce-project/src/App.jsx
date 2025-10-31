import { HomePage } from './Pages/home/HomePage'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { TrackingPage } from './Pages/TrackingPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { OrdersPage } from './Pages/orders/OrdersPage';

import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')

      setCart(response.data);

    };

  useEffect(() => {
    

    loadCart();

  }, []);




  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart}/>} />
    </Routes>

  )
}

export default App
