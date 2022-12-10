import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import CardProductCart from '../components/CardProductCart';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import useWindow from '../custom/useWindow';

const PriceChangeAnimation = keyframes`
from{
 opacity: 0;
 transform: translateY(10px);
} to {
    transform: translateY(0px);
opacity: 1;
}
`;
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
  transition: 0.3s;
  @media (max-width: 414px) {
    width: ${(props) => (props.showCartResponsiv === true ? '100%' : '0%')};
    height: 100%;
  }

  .total-value-wrapper {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .total-item-added {
    margin: 0 0 10px 0;
  }
`;
const TitleCart = styled.h2`
  margin-top: 30px;
  height: 8%;
`;
const CartHolderWrapper = styled.div`
  scroll-behavior: smooth;
  overflow: hidden scroll;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 10px;
  height: 90%;
  width: 100%;
  scroll-behavior: smooth;

  @media (max-width: 414px) {
    height: 54%;
  }
`;
const TotalPrice = styled.p`
  text-align: center;

  padding: 0 10px;
  min-width: 60px;
  max-width: 100px;
  animation: 0.5s ${PriceChangeAnimation};
`;
const TotalProduct = styled.p``;

export default function SideCart(props) {
  const { cartValue, setCartValue, setShowCartResponsiv, showCartResponsiv } = useContext(DataContext);
  const { width, height } = useWindow();
  const totalValue = props.cart.reduce((a, v) => (a = a + v.price), 0);

  const totalItemAdded = props.cart.length;

  /** Refresh total price of cart */
  useEffect(() => {
    setCartValue(totalValue);
  }, [totalValue]);

  return (
    <>
      <SideCartWrapper showCartResponsiv={showCartResponsiv}>
        {(width > 600 || showCartResponsiv === true) && (
          <>
            <TitleCart>Votre panier</TitleCart>
            <CartHolderWrapper>
              {props.cart.map((ItemInCart) => {
                return (
                  <CardProductCart
                    name={ItemInCart.name}
                    id={ItemInCart.id}
                    price={ItemInCart.price}
                    image={ItemInCart.image}
                    setCart={props.setCart}
                    cart={props.cart}
                    key={ItemInCart.id}
                  />
                );
              })}
            </CartHolderWrapper>
            <div className="total-value-wrapper">
              Total commande: <TotalPrice key={totalValue}> {totalValue.toFixed(2)} </TotalPrice>€
            </div>
            <div className="total-item-added">{totalItemAdded} article(s)</div>
            <Link to="/private/checkout">
              <Button buttonUtility={'Payer la commande'} style={{ padding: '10px' }} />
            </Link>
          </>
        )}
      </SideCartWrapper>
    </>
  );
}
