import React from 'react';
import TopBar from '../components/TopBar';
import MainContent from './MainContent';
import Nav from '../navigation/Nav';
import styled from 'styled-components';


const TopWrapper = styled.div`
position: relative;
background-color: red;
@media (max-width: 414px) { 
position: fixed;
width: 100%;
z-index: 100;


}
`;

export default function Home(props) {

  return (
    <>
      <TopWrapper>
        <TopBar />
        <Nav setIsPannelAdminShowed={props.setIsPannelAdminShowed} cart={props.cart} />
      </TopWrapper>

      <MainContent
        pushNewProductToDb={props.pushNewProductToDb}
        burgerList={props.burgerList}
        setBurgerlist={props.setBurgerlist}
        cart={props.cart}
        setCart={props.setCart}
        cartValue={props.cartValue}
        setCartValue={props.setCartValue}
        isPannelAdminShowed={props.isPannelAdminShowed}
      />
    </>
  );
}
