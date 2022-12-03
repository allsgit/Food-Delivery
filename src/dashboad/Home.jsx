import React from 'react';
import TopBar from '../components/TopBar';
import MainContent from './MainContent';
import Nav from '../navigation/Nav';

export default function Home(props) {
  return (
    <>
      <TopBar />
      <Nav setIsPannelAdminShowed={props.setIsPannelAdminShowed} />
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
