import React from 'react';
import SideCart from './SideCart';
import CardGallery from './CardGallery';
import styled from 'styled-components';
import AdminPannel from './AdminPannel';


const MainwWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default function MainContent() {
  return (
    <MainwWrapper>
      <CardGallery />
      <SideCart />
      <AdminPannel />
    </MainwWrapper>
  );
}
