import React from 'react';
import styled from 'styled-components';
const AdvWrapper = styled.div`
    position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
p{

    width: auto;
    height: 20px;
    background-color: white;
    opacity: 1;
    z-index: 10000;
}
`;

export default function Advices() {
  return (
    <AdvWrapper>
      <p>log admin : admin@food.com - password : aaaaaa</p>
      <p>log user : foo@foo.com - password : aaaaaa   --- Or --- create new user </p>
    </AdvWrapper>
  );
}
