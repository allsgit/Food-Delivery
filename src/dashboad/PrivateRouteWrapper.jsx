import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/dataContext';
import Home from './Home';

export default function PrivateRouteWrapper(props) {
  const { burgerList, setBurgerlist } = useContext(DataContext);

  const [isPannelAdminShowed, setIsPannelAdminShowed] = useState(false);

  return (
    <>
      <Home
        burgerList={burgerList}
        setBurgerlist={setBurgerlist}
        cart={props.cart}
        setCart={props.setCart}
        isPannelAdminShowed={isPannelAdminShowed}
        setIsPannelAdminShowed={setIsPannelAdminShowed}
      />
    </>
  );
}
