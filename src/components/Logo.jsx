import React from 'react';
import styled from 'styled-components';
import LogoItemSrc from './assets/images/Burger stall logo - Fait avec PosterMyWall.png';

const LogoItem = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height:50px;
  color: white;
  border-radius: 10px;
  margin: 0 0 0 40px;
  padding: 0;
`;
export default function Logo() {
  return <LogoItem src={LogoItemSrc}></LogoItem>;
}
