import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from 'context/userContext';

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
