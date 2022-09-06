import React from 'react';
import styled from 'styled-components';
import BackgroundFiller from './assets/images/backgroundBurger.jpeg';
import Button from './Button';
import BackToArrow from './assets/images/icons8-back-to-90.png';
import { Link } from 'react-router-dom';
import stripeContainer from './services/stripe/StripeContainer'

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const OrderInfoInput = styled.input`
  width: 70%;
  height: 6%;
  background-color: white;
  margin: 30px;
  border: 1px solid grey;
  padding-left: 10px;
`;
const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;
const BackToHome = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
`;
const TitleOrder = styled.h1`
  text-align: center;
  width: 60%;
`;

const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TotalCheckout = styled.p`
  margin-bottom: 10px;
`;

export default function PaymentPage(props) {
  return (
    <MainWrapper>
      <BackgroundImg src={BackgroundFiller}></BackgroundImg>

      <InputWrapper>
        <Link to="/order">
          <BackToHome src={BackToArrow}></BackToHome>
        </Link>
        <TitleOrder>
          Super ! <br></br>Merci de renseigner vos informations
        </TitleOrder>
        <OrderInfoInput placeholder="Nom"></OrderInfoInput>
        <OrderInfoInput placeholder="Prenom"></OrderInfoInput>
        <OrderInfoInput placeholder="Adresse postale"></OrderInfoInput>
        <OrderInfoInput placeholder="Mail"></OrderInfoInput>
        <OrderInfoInput placeholder="Teléphone"></OrderInfoInput>
        <CheckoutWrapper>
          <TotalCheckout>Total commande: {props.cartValue.toFixed(2)} €</TotalCheckout>
          <Link to="/CardInfoCheckout">
            <Button
              HandleSumbit={(e) => {}}
              buttonUtility={'Payer La commande'}
            />
          </Link>
        </CheckoutWrapper>
      </InputWrapper>
    </MainWrapper>
  );
}
