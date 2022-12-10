import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { DataContext } from 'context/dataContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './payment-style.scss';
import { useNavigate } from 'react-router-dom';
import BurgerBackgroundImg from '../../assets/images/backgroundBurger.jpeg';
import Confetti from 'react-confetti';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      margin: '0 0 0 10px',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: 'black' },
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
    },
  },
};

export default function PaymentForm(props) {
  const TodayDate = new Date();
  const milisecond = TodayDate.getUTCMilliseconds();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigateTo = useNavigate();
  const { cartValue, setCartValue, setCart } = useContext(DataContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const ticket = getRandomInt(1000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error', error);
        setSuccess(true);
      }
    } else {
      console.log(error.message);
      setSuccess(true);
    }
  };

  return (
    <>
      {cartValue.toFixed(2) > 0 ? (
        <div>
          <img className="burger-background" src={BurgerBackgroundImg}></img>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div className="paymentWrapper">
                <p className="payment-title">Merci de renseigner vos informations de paiement</p>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <button onClick={() => props.setCart([])}>Payer la commande d'un montant de : {cartValue.toFixed(2)}€</button>
              </div>
            </form>
          ) : (
            <>
              <Confetti width={3000} height={2000} />;
              <div className="ticket-number">
                <h2>
                  Commande validé votre numéro est le : #{Number(milisecond)}
                  {ticket}
                </h2>
              </div>
            </>
          )}
        </div>
      ) : (
        navigateTo('/private/Order')
      )}
    </>
  );
}
