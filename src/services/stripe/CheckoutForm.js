import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Button from '../../components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CheckoutForm() {
  const stopButton = (e) => {
    e.preventDefault();
  };
  const stripe = useStripe();
  const elements = useElements();

  const SubmitPayment = async (e) => {
    e.preventDefault();
    const [error, paymentMethod] = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
    }
  };
  return (
    <form onSubmit={SubmitPayment()} style={{ maxwidth: 100 }}>

        <CardElement
          options={{
            hidePostalCode: true,
          }}
        />

      <Button HandleSumbit={(e) => e} buttonUtility={(e) => stopButton(e)} />
    </form>
  );
}
