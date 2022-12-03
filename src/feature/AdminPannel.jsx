import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { DataContext } from '../Context/dataContext';
import { useContext } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebase.config';
import Button from '../components/Button';
import ImgPreviewForCard from '../assets/images/image-preview.png';
import MsgAdminActive from '../components/MsgAdminActive';

// ANIMATIONS //

const showPannelAdminAnim = keyframes`
 0% { transform: translateY(600px) }
 100% { transform: translate(0) }
`;

// STYLED COMPONENTS
const AdminPannelWrapper = styled.div`
  display: ${(props) => (props.isPannelAdminShowed === true ? 'flex' : 'none')};
  transition: 0.6s;
  z-index: 10;
  position: fixed;
  bottom: 0;
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
  cursor: pointer;
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
  width: 40%;
  border-radius: 3px;
  border: 0.2px solid grey;
  padding: 0 0 0 10px;
  transition: 0.1s;
  margin-bottom: 10px;
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
  width: 60%;
`;

const OptionTxt = styled.option``;

function AdminPannel(props) {
  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const pubRef = useRef();
  const ingredientsRef = useRef();
  const [selectStock, setSelectStock] = useState('en stock');
  const [hidePannel, setHidePannel] = useState('240px');
  const [imgPreview, setImgPreview] = useState(ImgPreviewForCard);
  const [addItemValue, setaddItemValue] = useState([]);
  const { setBurgerlist, deleteItemFromDb, selectPub, setSelectPub } = useContext(DataContext);
  const ItemCollection = collection(db, 'Items');

  // * push new product to sale dashboard from admin input pannel
  const addNewProduct = () => {
    addItemValue.push({
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      image: imgRef.current.value,
      stock: selectStock,
      pub: selectPub,
      ingredient: ingredientsRef.current.value,
    });
    pushNewProductToDb();
    ClearField();
  };

  function pushNewProductToDb() {
    addItemValue.map((el) => {
      const addItemOnDb = async () => {
        try {
          const docRef = await addDoc(collection(db, 'Items'), {
            name: el.name,
            price: el.price,
            image: el.image,
            ingredient: el.ingredient,
            pub: el.pub,
          });
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      };
      addItemOnDb();
      setaddItemValue([]);
    });
  }

  const showItems = useEffect(() => {
    const getItem = async () => {
      const data = await getDocs(ItemCollection);
      setBurgerlist(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getItem();
  }, [addItemValue, deleteItemFromDb]);

  // CHECK IF INPUT CONTAINT HTTP LINK TO IMAGE
  const imgCheckerToDisplayPreview = (e) => {
    if (e.target.value.includes('http' || 'https' || 'ftp' || 'data')) {
      setImgPreview(imgRef.current.value);
    } else {
      setImgPreview(ImgPreviewForCard);
    }
  };

  // CLEAR FIELD ON SUMBIT //
  const ClearField = () => {
    setImgPreview(ImgPreviewForCard);
    imgRef.current.value = '';
    nameRef.current.value = '';
    ingredientsRef.current.value = '';
    priceRef.current.value = '';
  };
  return (
    <>
      <AdminPannelWrapper size={hidePannel} isPannelAdminShowed={props.isPannelAdminShowed}>
        <MenuTabAdd>Ajouter un produit</MenuTabAdd>
        {/*    <MenuTabModify>Modifier un produit</MenuTabModify> */}
        <MenuHide
          onClick={() => {
            hidePannel === '0px' ? setHidePannel('240px') : setHidePannel('0px');
          }}
        >
          reduire V
        </MenuHide>
        <ProductImg src={imgPreview}></ProductImg>
        <InputsWrapper>
          <ItemInput placeholder="Nom du produit" ref={nameRef}></ItemInput>
          <ItemInputImg
            placeholder="insérer/coller l'url de l'image"
            ref={imgRef}
            onChange={(e) => {
              imgCheckerToDisplayPreview(e);
            }}
          ></ItemInputImg>
          <IngredientsInput placeholder="ingrédients, poids, contenance" ref={ingredientsRef}></IngredientsInput>

          <SubInputsWrapper>
            <PriceInput placeholder="prix" ref={priceRef}></PriceInput>
            <AdsInput onChange={(e) => setSelectPub(e.target.value)}>
              <OptionTxt> nouveau produit ?</OptionTxt>
              <OptionTxt value="pub">oui</OptionTxt>
              <OptionTxt value="no pub">non</OptionTxt>
            </AdsInput>
          </SubInputsWrapper>
          <Button HandleSumbit={() => addNewProduct()} buttonUtility={'  Ajouter un nouveau produit au menu'} customSize={'150'} />
        </InputsWrapper>
        {props.isPannelAdminShowed === false ? null : <MsgAdminActive />}
      </AdminPannelWrapper>
    </>
  );
}

export default AdminPannel;
