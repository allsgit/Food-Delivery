import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useRef, useState, useEff } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import ImgPreviewForCard from './assets/images/image-preview.png';

// ANIMATIONS //

const showPannelAdminAnim = keyframes`
 0% { transform: translateY(600px) }
 100% { transform: translate(0) }
`;
// STYLED COMPONENTS

const AdminPannelWrapper = styled.div`
  transition: 0.6s;
  z-index: 10;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  height: ${(props) => props.size};
  width: 80%;
  border-radius: 0 0 10px 0;
  box-shadow: 8px 2px 20px 1px rgba(0, 0, 0, 0.22);
  animation: 0.9s ${showPannelAdminAnim};
`;
const MenuTabAdd = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px 10px 0 0;
  top: -40px;
  box-shadow: -3px -17px 29px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #bebdbd;
  background: #fff;
`;
const MenuTabModify = styled(MenuTabAdd)`
  left: 200px;
  color: white;
  background: #000;
`;
const MenuHide = styled(MenuTabAdd)`
  left: 420px;
  width: 80px;
  font-weight: bold;
`;

const InputsWrapper = styled.div`
  overflow: hidden;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 270px;
`;

const ItemInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 0px 10px 0;
  padding: 0 0 0 10px;
  border-radius: 3px;
  border: 0.2px solid grey;
`;
const ItemInputImg = styled(ItemInput)``;

const SubInputsWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductImg = styled.img`
  width: 180px;
  height: 90%;
  border: 1px solid black;
  margin: 10px 40px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  animation: 0.2s ${showPannelAdminAnim};
`;

const PriceInput = styled.input`
  margin: 0 2px;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  border: 0.2px solid grey;
  padding: 0 0 0 10px;
  transition: 0.1s;
  &:invalid {
    outline: 1px solid red;
    z-index: 100;
  }
`;
const IngredientsInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 0px 10px 0;
  padding: 0 0 0 10px;
  border-radius: 3px;
  border: 0.2px solid grey;
`;
const StockInput = styled.select`
  margin: 0 2px;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  border: 0.2px solid grey;
`;

const AdsInput = styled(StockInput)`
  width: 100px;
`;
//

const SubmitBtn = styled.button`
  width: 70%;
  height: 40px;
  background: green;
  border: none;
  border-radius: 5px;
  margin: 8px 0 0 0;
  color: white;
  &:active {
    transform: scale(0.8);
  }
`;

const OptionTxt = styled.option``;

function AdminPannel(props) {
  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const ingredientsRef = useRef();
  const [selectStock, setSelectStock] = useState('en stock');
  const [selectPub, setSelectPub] = useState('no pub');
  const [hidePannel, setHidePannel] = useState('240px');
  const [imgPreview, setImgPreview] = useState(ImgPreviewForCard);
  const copyOfBurgerList = [...props.burgerList];

  // push new product to sale dashboard from admin input pannel
  const PushNewProduct = () => {
    copyOfBurgerList.push({
      name: nameRef.current.value,
      price: parseInt(priceRef.current.value),
      image: imgRef.current.value,
      stock: selectStock,
      pub: selectPub,
      ingredient: ingredientsRef.current.value,
      id: uuidv4(),
    });
    props.setBurgerlist(copyOfBurgerList);
  };

// CHECK IF INPUT CONTAINT HTTP LINK TO IMAGE
  const imgCheckerToDisplayPreview = (e) => {
    if (e.target.value.includes('http' || 'https' || 'ftp' || "data")) {
      setImgPreview(imgRef.current.value);
    } else {
      setImgPreview(ImgPreviewForCard);
    }
  };

  // clear Filed

  const ClearField = () => {
    setImgPreview(ImgPreviewForCard) 
    imgRef.current.value = ""
    nameRef.current.value = ""
    ingredientsRef.current.value = ""
    priceRef.current.value = ""
  }
  return (
    <AdminPannelWrapper size={hidePannel}>
      <MenuTabAdd>Ajouter un produit</MenuTabAdd>
      <MenuTabModify>Modifier un produit</MenuTabModify>
      <MenuHide
        onClick={() => {
          hidePannel === '0px' ? setHidePannel('240px') : setHidePannel('0px');
        }}
      >
        V
      </MenuHide>
      <ProductImg src={imgPreview}></ProductImg>
      <InputsWrapper>
        <ItemInput placeholder="Nom du produit" ref={nameRef}></ItemInput>
        <ItemInputImg
          placeholder="insérer l'url de l'image"
          ref={imgRef}
    
          onChange={(e) => {
            imgCheckerToDisplayPreview(e);
          }}
        ></ItemInputImg>

        <IngredientsInput
          placeholder="ingrédients"
          ref={ingredientsRef}
        ></IngredientsInput>

        <SubInputsWrapper>
          <PriceInput
            placeholder="prix"
            pattern="[0-9]+"
            ref={priceRef}
          ></PriceInput>

          <StockInput onChange={(e) => setSelectStock(e.target.value)}>
            <OptionTxt value="en stock">en Stock</OptionTxt>
            <OptionTxt Value="rupture">rupture de stock</OptionTxt>
          </StockInput>
          <AdsInput onChange={(e) => setSelectPub(e.target.value)}>
            <OptionTxt value="no pub">no pub</OptionTxt>
            <OptionTxt value="pub">pub</OptionTxt>
          </AdsInput>
        </SubInputsWrapper>
        <Button HandleSumbit={() => PushNewProduct() + ClearField()} buttonUtility={"  Ajouter un nouveau produit au menu"} customSize={"150"}/>
        
    
      </InputsWrapper>
    </AdminPannelWrapper>
  );
}

export default AdminPannel;
