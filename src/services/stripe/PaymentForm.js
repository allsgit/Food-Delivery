import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BurgerBackgroundImg from '../../assets/images/backgroundBurger.jpeg';
import Confetti from 'react-confetti';
import useWindow from '../../custom/useWindow';
import styled, { keyframes } from 'styled-components';

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

const Slidein = keyframes`
  from {
    transform: translate(-100%);
  }

  to {
    transform: translate(-50%);
  }
`;

const BackGroundImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;

const PaymentWrapper = styled.div`
  position: absolute;
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
  background-color: white;
  height: 40%;
  width: ${(props) => (props.widthResponsiv < 670 ? '400px' : 'auto')};
  padding: 20px;
  border-radius: 10px;
  .payment-title {
    font-size: 20px;
    margin: 20px;
  }

  button {
    display: block;
    font-size: 16px;
    width: calc(100% - 30px);
    height: auto;
    margin: 40px 15px 0;
    background-color: orange;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;
    border-radius: 4px;
    color: black;
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    will-change: transform, background-color, box-shadow;
    border: none;
    padding: 10px;
  }
  .FormGroup {
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: black;
    will-change: opacity, transform;
    border-radius: 4px;
  }

  .FormRow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
  }
`;

const TicketNumber = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  z-index: 100000;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
  animation: ${Slidein} 1s forwards;
`;

export default function PaymentForm(props) {
  const TodayDate = new Date();
  const milisecond = TodayDate.getUTCMilliseconds();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigateTo = useNavigate();
  const { cartValue } = useContext(DataContext);
  const { width, height } = useWindow();

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
          <BackGroundImg className="burger-background" src={BurgerBackgroundImg} width={width} height={height}></BackGroundImg>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <PaymentWrapper widthResponsiv={width}>
                <p className="payment-title">Merci de renseigner vos informations de paiement</p>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <button onClick={() => props.setCart([])}>Payer la commande d'un montant de : {cartValue.toFixed(2)}€</button>
              </PaymentWrapper>
            </form>
          ) : (
            <>
              {}
              <Confetti width={width} height={height}/>;
              <TicketNumber>
                <h2>
                  Commande validé votre numéro est le : #{Number(milisecond)}
                  {ticket}
                </h2>
              </TicketNumber>
              {setTimeout(() => {
                navigateTo('/private/Order');
              }, 5000)}
            </>
          )}
        </div>
      ) : (
        navigateTo('/private/Order')
      )}
    </>
  );
}
