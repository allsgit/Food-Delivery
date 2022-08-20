import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';


const TopBarWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #DE8604;
`;

export default function TopBar() {
  return (
    <TopBarWrapper>
      <Logo />
    
    </TopBarWrapper>
  );
}
