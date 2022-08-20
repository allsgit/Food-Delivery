import React from 'react';
import styled from 'styled-components';



const LogoItem = styled.div`
text-align: center;
  width: 100px;
  height: 50px;
  background-color: yellow;
  color: orange;
  border-radius: 10px;
`;
export default function Logo() {
  return <LogoItem>My Logo</LogoItem>;
}
