import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from 'components/Context/userContext';

export default function Private() {
  const { isAuth } = useContext(UserContext);
  console.log(isAuth);
  if (isAuth === false) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}


