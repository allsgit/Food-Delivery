import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminButton from './AdminButton';

const NavWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 70px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const UlNav = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;
const LiNav = styled.li`
  height: 100%;
  width: 20%;
  list-style-type: none;
  &:focus {
    background: red;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  list-style-type: none;
  text-decoration: none;
  color: black;
  border: 0.1px solid lightgrey;
`

const Selected = styled(Link)`
background-color: red;
`


export default function Nav() {

  return (
    <NavWrapper>
      <UlNav>
        <LiNav >
          <NavLink to="/Burgers" className={({isActive})=> isActive ? Selected : ""}>Burgers</NavLink>
        </LiNav>
        <LiNav>
          <NavLink to="/Pizza">Pizza</NavLink>
        </LiNav>
        <LiNav>
          <NavLink to="/Drinks">Drinks</NavLink>
        </LiNav>
      </UlNav>
      <AdminButton />
    </NavWrapper>
  );
}
