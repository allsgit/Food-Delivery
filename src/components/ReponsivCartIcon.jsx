import React from 'react';
import styled from 'styled-components';
import useWindow from '../custom/useWindow';
import Cart from '.././assets/images/shopping-cart.png';
import Back from '../assets/images/back-button.png';

import { useContext } from 'react';
import { DataContext } from 'context/dataContext';

const CartWrapperForResponsiv = styled.div`
  position: relative;
  margin-right: 20px;
  .span-for-back {
    position: relative;
    display: flex;
    align-items: center;
  }

  .cart-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .back-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .number-or-articles {
    position: absolute;
    width: 10px;
    height: 10px;
    top: -4px;
    right: 3px;
    background-color: green;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
  }
`;
export default function ReponsivCartIcon(props) {
  const { setShowCartResponsiv, showCartResponsiv } = useContext(DataContext);
  const { width, height } = useWindow();
  return (
    <CartWrapperForResponsiv>
      {showCartResponsiv === true && width < 600 && (
        <span className="span-for-back" onClick={() => setShowCartResponsiv(!showCartResponsiv)}>
          <img className="back-icon" src={Back} /> Retour
        </span>
      )}
      {showCartResponsiv === false && width < 600 && (
        <>
          <span className="number-or-articles">{props.cart.length}</span>
          <img className="cart-icon" src={Cart} onClick={() => setShowCartResponsiv(!showCartResponsiv)} />
        </>
      )}
    </CartWrapperForResponsiv>
  );
}
