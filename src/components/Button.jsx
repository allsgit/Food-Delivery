import React from 'react';
import styled from 'styled-components';


const BaseButton = styled.button`
  position: relative;
  text-align: center;
  z-index: 1;
  height: auto;
  width: ${(props) => (props.customSize ? props.customSize : '120px')};
  background-color: ${(props) => (props.customColor ? props.customColor : 'green')};
  color: white;
  border: none;
  border-radius: ${(props) => (props.customStyle ? props.customStyle : '5px')};
  overflow: hidden;
  transition: 0.1s;
  padding: 7px;
  ::before {
    transition: 0.2s;
    transform: translateY(50px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    background-color: ${(props) => (props.customHover ? props.customHover : 'orange')};
    height: 90px;
    width: 290px;
  }
  &:hover {
    color: black;
    ::before {
      transform: translateY(0px);
    }
  }
`;
// *! Button is reusable handle props to do it //

export default function Button(props) {
  return (
    <BaseButton onClick={props.HandleSumbit} customSize={props.customSize} customColor={props.customColor} customStyle={props.customStyle} customHover={props.customHover}>
      {props.buttonUtility}
    </BaseButton>
  );
}
