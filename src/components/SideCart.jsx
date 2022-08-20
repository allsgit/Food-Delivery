import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CardProductCart from './CardProductCart';

const SideCartWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 20;
  align-items: center;
  flex-direction: column;
  right: 0;
  top: 0;
  padding: 0 0 10px 0;
  width: 20%;
  height: 100vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const TitleCart = styled.h2`
  margin-top: 30px;
  height: 10%;
`;

const CartHolderWrapper = styled.div`
scroll-behavior: smooth;
overflow: hidden scroll;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 10px;
  height: 90%;
  width: 100%;
`;

const TotalPrice = styled.p`
margin-bottom: 20px;
`

export default function SideCart() {
  return (
    <SideCartWrapper>
      <TitleCart>Votre panier</TitleCart>
      <CartHolderWrapper>
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
      </CartHolderWrapper>
      <TotalPrice>Total commande: 30.50 euro</TotalPrice>
      <Button buttonUtility={'Payer la comande'} />
    </SideCartWrapper>
  );
}
