import { createContext, useState, useEffect } from 'react';
export const DataContext = createContext();

export function DataContextProvider(props) {



  const [burgerList, setBurgerlist] = useState([]);
  const [addItemToDashboad, setaddItemToDashboad] = useState([]);
  const [deleteItemFromDb, setDeleteItemFromDb] = useState('');
  const [selectPub, setSelectPub] = useState('no pub');
  const [cartValue, setCartValue] = useState(0);
  const [registerToogle, setRegisterToogle] = useState(false);
  const [showCartResponsiv, setShowCartResponsiv] = useState(false)

  return (
    <DataContext.Provider
      value={{
        burgerList,
        setBurgerlist,
        addItemToDashboad,
        setaddItemToDashboad,
        deleteItemFromDb,
        setDeleteItemFromDb,
        selectPub,
        setSelectPub,
        cartValue,
        setCartValue,
        registerToogle,
        setRegisterToogle,
        setShowCartResponsiv,
        showCartResponsiv,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
