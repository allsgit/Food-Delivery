import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';

const GalleryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CardGallery() {
  return (
    <GalleryWrapper>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </GalleryWrapper>
  );
}
