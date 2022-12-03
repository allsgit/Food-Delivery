import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useState, useContext, useEffect } from 'react';
import { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebase.config';
import { DataContext } from '../Context/dataContext';

const CardAppearAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const CardDeleteWizzle = keyframes`
  from {
   
    transform: translateX(2px);
    transform: rotate(5deg);
  }
  to {
  
    transform: translateX(-2px);
    transform: rotate(-5deg);
  }
`;
const opacityCloseButtonAnim = keyframes`
  from {
   transform: scale(0);
   opacity: 0;
  }
  to {
    transform: scale(1);
    opacity : 1;
  }
`;
const ImgWrapper = styled.div`
  padding-top: 10px;
  height: 40%;
  .item-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CarWraper = styled.div`
  position: relative;
  animation: 0.3s ${CardAppearAnimation};
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
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    outline: 2px solid #de8604;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.43) 0px 6px 6px;
    transform: scale(1.03);
  }
  .item-title {
    font-size: 20px;
    margin: 0;
    font-size: 20px;
  }
  .item-detail {
    height: 30px;
    width: 100%;
    word-wrap: break-word;
    white-space: normal;
    text-align: center;
    padding: 2px;
    margin-top: 10px;
    font-size: 14px;
  }
  .item-price {
    margin: 10px 0;
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
  /*   animation: 0.3s ${CardDeleteWizzle} alternate infinite, 1s ${opacityCloseButtonAnim};
 */
`;
const PubNewProduct = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-weight: bold;
  width: 88%;
  height: 50px;
  background-color: red;
  color: white;
  transform: rotate(-45deg);
  top: 5%;
  left: -64px;
`;

export default function ItemCard(props) {
  const { name, ingredient, price, image, id, pub } = props.burgers;
  const { burgerList, deleteItemFromDb, setDeleteItemFromDb } = useContext(DataContext);
  const copyOfCart = [...props.cart];

  // *! Add element to cart //
  const AddItemToCart = (name, ingredient, price, image, id) => {
    copyOfCart.push({ name, ingredient, price, image, id });
    props.setCart(copyOfCart);
  };
  // *! delete card from main content //
  const deleteCard = (id) => {
    const filteredBurger = burgerList
      .map((card) => card.id)
      .filter((card) => {
        return card === id;
      });
    setDeleteItemFromDb(filteredBurger);
    deleteDocFromDb(deleteItemFromDb);
  };

  const deleteDocFromDb = async () => {
    await deleteDoc(doc(db, 'Items', id));
    setDeleteItemFromDb([]);
  };

  return (
    <>
      <CarWraper>
        {props.isPannelAdminShowed === true && <CloseButton onClick={() => deleteCard(id)}>X</CloseButton>}
        {pub === 'pub' && <PubNewProduct>Nouveau !</PubNewProduct>}
        <ImgWrapper>
          <img className="item-image" src={image}></img>
        </ImgWrapper>
        <h1 className="item-title">{name}</h1>
        <p className="item-detail">{ingredient}</p>
        <p className="item-price">{price}€</p>
        <Button HandleSumbit={(e) => AddItemToCart(name, ingredient, price, image, uuidv4())} buttonUtility={'Ajouter'} />
      </CarWraper>
    </>
  );
}
