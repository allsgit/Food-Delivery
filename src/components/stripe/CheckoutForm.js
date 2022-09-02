import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Button from '../Button';




export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const SubmitPayment = async(e) => {
    e.preventDefault();
    const [error, paymentMethod] = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })
    if (!error) {
        console.log("token généré: ", paymentMethod)
    }
  }
  return (
    <form onSubmit={SubmitPayment()} style={{ maxwidth: 400 }}>
      <CardElement
        options={{
          hidePostalCode: true,
        }}
      />
      <Button HandleSumbit={(e) => e} buttonUtility={'Payer La commande'} />
    </form>
  );
}
