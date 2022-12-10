import React from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const GalleryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 414px) { 
    width: 100%;
    margin-top: 120px;
   }
`;

export default function CardGallery(props) {
  return (
    <GalleryWrapper>
      {props.burgerList.map((burgers) => {
        return (
          <div key={burgers.id}>
            <ItemCard
              burgers={burgers}
              setCart={props.setCart}
              cart={props.cart}
              burgerList={props.burgerList}
              setBurgerlist={props.setBurgerlist}
              isPannelAdminShowed={props.isPannelAdminShowed}
            />
    
          </div>
        );
      })}
    </GalleryWrapper>
  );
}
