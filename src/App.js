import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [burgerList, setBurgerlist] = useState([
    {
      name: 'BigMac',
      ingredient: '2 steack, salade, cornichon, sauce Big MaC',
      price: 6.5,
      image:
        'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt4e32a970bffd0792/61d866010f60435c58f20a0a/big-mac.png?auto=webp',
      id: uuidv4(),
      stock: 'en stock',
    },
    {
      name: 'Cheese Burger',
      ingredient: 'Chedar, steack, cornichon, ketchup',
      price: 3,
      image:
        'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt5718be23ff804bbe/61d86677d562a95eb8bd4179/cheeseburger.png?auto=webp',
      id: uuidv4(),
      stock: 'en stock',
    },
    {
      name: 'Filet O Fish',
      ingredient: 'poisson colin, tomate',
      price: 4.5,
      image:
        'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6f16eb3040712590/61a623cc5e4d8458d1a71e8f/090eeba3e36f2aeaf47e0b0a6eda8c880cae345d.png?auto=webp',
      id: uuidv4(),
      stock: 'en stock',
    },
    {
      name: '280',
      ingredient: 'steack 280 gramme, moutarde, ',
      price: 6.5,
      image:
        'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6f16eb3040712590/61a623cc5e4d8458d1a71e8f/090eeba3e36f2aeaf47e0b0a6eda8c880cae345d.png?auto=webp',
      id: uuidv4(),
      stock: 'rupture',
    },
  ]);
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const [isPannelAdminShowed, setIsPannelAdminShowed] = useState(false)
console.log(isPannelAdminShowed)
  return (
    <div className="App">
  
      <TopBar />
      <Nav setIsPannelAdminShowed={setIsPannelAdminShowed}/>
      <MainContent
        burgerList={burgerList}
        setBurgerlist={setBurgerlist}
        cart={cart}
        setCart={setCart}
        cartValue={cartValue}
        setCartValue={setCartValue}
        isPannelAdminShowed={isPannelAdminShowed}
      />
    </div>
  );
}

export default App;
