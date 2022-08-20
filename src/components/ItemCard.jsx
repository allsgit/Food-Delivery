import React from 'react';
import styled from 'styled-components';
import mockImg from './assets/images/mockimg.png';
import Button from './Button';
import { keyframes } from 'styled-components';

const CardAppearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImgWrapper = styled.div`
  padding-top: 10px;
  height: 40%;
`;

const ItemImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const ItemTitle = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  margin: 0;
`;
const ItemDetail = styled.p`
  width: 100%;
  word-wrap: break-word;
  white-space: normal;
  text-align: center;
  padding: 8px;
  font-size: 14px;
`;
const ItemPrice = styled.p`
  margin: 10px 0;
`;
const CarWraper = styled.div`
  animation: 0.4s ${CardAppearAnimation};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;
  width: 220px;
  margin: 12px;

  height: 300px;
  border-radius: 10px;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    outline: 2px solid #de8604;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.43) 0px 6px 6px;
  }
`;

export default function ItemCard() {
  return (
    <CarWraper>
      <ImgWrapper>
        <ItemImg src={mockImg}></ItemImg>
      </ImgWrapper>

      <ItemTitle>4 fromages</ItemTitle>
      <ItemDetail>Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP</ItemDetail>
      <ItemPrice>13 euro</ItemPrice>
      <Button buttonAction={() => ''} buttonUtility={'Ajouter'} />
    </CarWraper>
  );
}
