import { HomePage } from './Pages/HomePage'
import { Routes, Route } from 'react-router';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { TrackingPage } from './Pages/TrackingPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { OrdersPage } from './Pages/OrdersPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  )
}

export default App
