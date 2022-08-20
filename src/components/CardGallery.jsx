import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';

const GalleryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CardGallery(props) {
 


  return (
    <GalleryWrapper>
      {props.burgerList.map((burgers) => {
        return <ItemCard  burgers={burgers} setCart={props.setCart} cart={props.cart} />;
      })}
    </GalleryWrapper>
  );
}
