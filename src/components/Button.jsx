import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const ButtonAnimationHover = keyframes`
from{

} to {

}
`;

const BaseButton = styled.button`
  position: relative;
  text-align: center;
  z-index: 1;
  height: auto;
  width: 120px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.1s;
  padding: 7px;
  &:active {
    transform: scale(0.9);
  }

  ::before {
    transition: 0.2s;
    transform: translateY(50px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    background-color: orange;
    height: 40px;
    width: 200px;
  }
  &:hover {
    color: black;
    ::before {
      transform: translateY(0px);
    }
  }
`;

export default function Button(props) {
  return <BaseButton onClick={props.HandleSumbit}>{props.buttonUtility}</BaseButton>;
}
