import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import { v4 as uuidv4 } from 'uuid';

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
        return (
          <>
            <ItemCard
              burgers={burgers}
              setCart={props.setCart}
              cart={props.cart}
              key={burgers.id}
              burgerList={props.burgerList}
              setBurgerlist={props.setBurgerlist}
              isPannelAdminShowed={props.isPannelAdminShowed}

            />
          </>
        );
      })}
    </GalleryWrapper>
  );
}
