import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import Button from './Button';

const showPannelAdminAnim = keyframes`
 0% { opacity: 0;transform: translateX(-200px) }
 100% { opacity: 1;transform: translate(0) }
`;
const CartItemAddedWrapper = styled.div`
  overflow: hidden;
  overflow: overlay;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  margin-top: 8px;
  border-radius: 10px;
  box-shadow: -2px 4px 8px 1px rgba(0, 0, 0, 0.37);
  background-color: #fff;
  animation: 0.5s ${showPannelAdminAnim};
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 70px;
  margin-left: 40px;
  .cart-image {
    width: 110%;
    height: 110%;
    object-fit: contain;
  }
`;

const CartItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  width: 43%;
  .cart-item-price {
    color: #f69110;
    font-weight: bold;
  }
  .cart-item-name{
    color: #f69110;
    font-weight: bold;
    font-size: 15px;
  }
`;

export default function CartAddedProductCard(props) {

  const cart = props.cart;

  const deleteItemFromCart = (id) => {
    const filterCart = cart.filter((item) => {
      return item.id !== id;
    });
    props.setCart(filterCart);
  };

  return (
    <CartItemAddedWrapper key={3}>
      <ImgWrapper>
        <img className="cart-image" src={props.image}></img>
      </ImgWrapper>
      <CartItemInfo>
        <p className="cart-item-name">{props.name}</p>
        <p className="cart-item-price">{props.price}€</p>
      </CartItemInfo>
      <Button
        HandleSumbit={() => deleteItemFromCart(props.id)}
        buttonUtility="X"
        customSize={'40px'}
        customColor={'orange'}
        customStyle={'none'}
        customHover={'red'}
      />
    </CartItemAddedWrapper>
  );
}
