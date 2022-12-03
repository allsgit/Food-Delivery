import React from 'react';
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PaymentPage from '../components/PaymentPage';
import StripeContainer from '../services/stripe/StripeContainer';
import { Routes, Route } from 'react-router-dom';
import { DataContext } from 'Context/dataContext';
import Home from './Home';

export default function PrivateRouteWrapper() {
  const { burgerList, setBurgerlist } = useContext(DataContext);
  const [cart, setCart] = useState([]);
  const [isPannelAdminShowed, setIsPannelAdminShowed] = useState(false);
  return (
    <>
      <Home
        burgerList={burgerList}
        setBurgerlist={setBurgerlist}
        cart={cart}
        setCart={setCart}
        isPannelAdminShowed={isPannelAdminShowed}
        setIsPannelAdminShowed={setIsPannelAdminShowed}
      />
    </>
  );
}
