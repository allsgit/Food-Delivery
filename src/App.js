import './App.css';
import Private from 'Private/Private';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import PrivateRouteWrapper from './dashboad/PrivateRouteWrapper';
import PaymentPage from 'components/PaymentPage';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from 'Context/userContext';
import PaymentForm from 'services/stripe/PaymentForm';
import StripeContainer from 'services/stripe/StripeContainer';
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');





function App() {
  // *! Local storge of cart //
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/order" element={<PrivateRouteWrapper cart={cart} setCart={setCart} />} />
{/*           <Route path="/private/checkout" element={<PaymentPage />} /> */}
          <Route path="/private/checkout" element={<StripeContainer setCart={setCart}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
