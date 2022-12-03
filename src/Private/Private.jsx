import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from 'Context/userContext';

export default function Private() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
