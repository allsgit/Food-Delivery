import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminButton from '../components/AdminButton';

import ReponsivCartIcon from 'components/ReponsivCartIcon';

const NavWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 50px;
  padding: 5px 0;
  background-color: orange;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 414px) {
    width: 100%;
    z-index: 1000;
  }
`;

export default function Nav(props) {


  return (
    <NavWrapper>
      <AdminButton setIsPannelAdminShowed={props.setIsPannelAdminShowed} />
      <ReponsivCartIcon cart={props.cart}/>
    </NavWrapper>
  );
}
