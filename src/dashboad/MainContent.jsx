import React from 'react';
import SideCart from '../feature/SideCart';
import CardGallery from './CardGallery';
import styled from 'styled-components';
import AdminPannel from '../feature/AdminPannel';
import { useState } from 'react';


const MainwWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

`;

export default function MainContent(props) {



  return (
    <MainwWrapper>
      <CardGallery
        burgerList={props.burgerList}
        setBurgerlist={props.setBurgerlist}
        setCart={props.setCart}
        cart={props.cart}
        cartValue={props.cartValue}
        isPannelAdminShowed={props.isPannelAdminShowed}
      />

      <SideCart cart={props.cart} setCart={props.setCart} cartValue={props.cartValue} setCartValue={props.setCartValue} />
      <AdminPannel
        pushNewProductToDb={props.pushNewProductToDb}
        setBurgerlist={props.setBurgerlist}
        burgerList={props.burgerList}
        isPannelAdminShowed={props.isPannelAdminShowed}
      />
    </MainwWrapper>
  );
}
