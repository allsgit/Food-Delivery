import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import MockImg from '../components/assets/images/mockimg.jpg';
import { keyframes } from 'styled-components';

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
  justify-content: space-between;
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
  width: 170px;
  height: 70px;
  margin-left: 10px;
`;
const CartItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const CartItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 20px;
`;
const CartItemPrice = styled.p`
  color: #f69110;
  font-weight: bold;
`;
const CartItemTitle = styled.p`
  font-family: 'Kepolu';
`;
const CartItemQuantity = styled.p`
  margin-right: 20px;
  font-size: 13px;
  color: #f69110;
  font-weight: bold;
`;

export default function CartAddedProductCard({ cart }) {
  return (
    <CartItemAddedWrapper key={3}>
      <ImgWrapper>
        <CartItemImg src={MockImg}></CartItemImg>
      </ImgWrapper>
      <CartItemInfo>
        <CartItemTitle>mockName</CartItemTitle>
        <CartItemPrice>MockPrice</CartItemPrice>
      </CartItemInfo>
    </CartItemAddedWrapper>
  );
}
