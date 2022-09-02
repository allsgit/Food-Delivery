import React from 'react'
import TopBar from './TopBar';
import MainContent from './MainContent';
import Nav from './Nav';

export default function Home(props) {
  return (
    <>
    <TopBar />
    <Nav setIsPannelAdminShowed={props.setIsPannelAdminShowed} />
    <MainContent
      burgerList={props.burgerList}
      setBurgerlist={props.setBurgerlist}
      cart={props.cart}
      setCart={props.setCart}
      cartValue={props.cartValue}
      setCartValue={props.setCartValue}
      isPannelAdminShowed={props.isPannelAdminShowed}
    />
  </>
  )
}
