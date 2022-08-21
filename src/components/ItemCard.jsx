import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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
const CardDeleteWizzle= keyframes`
  from {
   
    transform: translateX(2px);
    transform: rotate(1deg);
  }
  to {
  
    transform: translateX(-2px);
    transform: rotate(-1deg);
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
  height: 50px;
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
  position: relative;
  animation: 0.3s ${CardAppearAnimation} ;
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
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.43) 0px 6px 6px;
    transform: scale(1.03);
  }
`;

const CloseButton = styled.span`
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
  cursor: pointer;
`;

export default function ItemCard(props) {
  const { name, ingredient, price, image, id } = props.burgers;
  const copyOfCart = [...props.cart];
  const burgerList = props.burgerList;

  // ajouter élément au panier //
  const AddItemToCart = (name, ingredient, price, image, id) => {
    copyOfCart.push({ name, ingredient, price, image, id });
    props.setCart(copyOfCart);
  };

  // delete card from main content //
  const deleteCard = (id) => {
    const filteredBurger = burgerList.filter((card) => {
      return card.id !== id;
    });
    props.setBurgerlist(filteredBurger);
  };

  return (
    <>
      <CarWraper>
        <CloseButton onClick={() => deleteCard(id)}>X</CloseButton>

        <ImgWrapper>
          <ItemImg src={image}></ItemImg>
        </ImgWrapper>
        <ItemTitle>{name}</ItemTitle>
        <ItemDetail>{ingredient}</ItemDetail>
        <ItemPrice>{price}€</ItemPrice>
        <Button
          HandleSumbit={() =>
            AddItemToCart(name, ingredient, price, image, uuidv4())
          }
          buttonUtility={'Ajouter'}
        />
      </CarWraper>
    </>
  );
}
