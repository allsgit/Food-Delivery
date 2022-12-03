import './App.css';
import Private from 'Private/Private';
import { Route, Routes } from 'react-router-dom';
import HomeLoginPage from './login/HomeLoginPage';
import PrivateRouteWrapper from './dashboad/PrivateRouteWrapper';
import PaymentPage from 'components/PaymentPage';
import CheckoutForm from 'services/stripe/CheckoutForm';
import StripeContainer from 'services/stripe/StripeContainer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLoginPage />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/order" element={<PrivateRouteWrapper />} />
          <Route path="/private/checkout" element={<PaymentPage />} />
          <Route path="/private/checkout/paiement" element={<StripeContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
