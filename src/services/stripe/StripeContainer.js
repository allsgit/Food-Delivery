import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import React from 'react';
import './payment-style.scss';

const PUBLIC_KEY = 'pk_test_51LdcsOA6bxK49MTkpUW08BlsmLaeGdGMubpy9xEUq5Gej3TvLcnt6d1UZ0UvoztKpYASVc2YK1RTCvEXf4jMqnKj00wl26tqJU';
const stripeTestPromise = loadStripe(PUBLIC_KEY);
export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm setCart={props.setCart}/>
    </Elements>
  );
}
