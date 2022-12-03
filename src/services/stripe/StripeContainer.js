import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, stripe, clientSecret } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51LdcsOA6bxK49MTkpUW08BlsmLaeGdGMubpy9xEUq5Gej3TvLcnt6d1UZ0UvoztKpYASVc2YK1RTCvEXf4jMqnKj00wl26tqJU';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  // Pass the appearance object to the Elements instance
  return (
    <Elements stripe={stripeTestPromise}>
      Formulaire stripe
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
