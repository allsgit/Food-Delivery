import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminButton from './AdminButton';
import { NavLink as BaseNavLink } from "react-router-dom";

const NavWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: auto;
  padding: 5px 0;
  background-color: orange;
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

const NavLink = styled(BaseNavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  list-style-type: none;
  text-decoration: none;
  color: black;
  border: 0.1px solid lightgrey;
  &.active {
    background-color: #de8604;
    border: 1px solid black;
  }
`

const Selected = styled(Link)`
background-color: red;
`


export default function Nav(props) {

  return (
    <NavWrapper>
{/*       <UlNav>
        <LiNav >
          <NavLink to="/Burgers" onClick={() => console.log("hello")}>Burgers</NavLink>
        </LiNav>
        <LiNav>
          <NavLink to="/Pizza">Pizza</NavLink>
        </LiNav>
        <LiNav>
          <NavLink to="/Drinks">Drinks</NavLink>
        </LiNav>
      </UlNav> */}
      <AdminButton setIsPannelAdminShowed={props.setIsPannelAdminShowed}/>
    </NavWrapper>
  );
}
