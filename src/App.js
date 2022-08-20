import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import MockImg from './components/assets/images/mockimg.png';
import { useState } from 'react';

function App() {
  const [burgerList, setBurgerlist] = useState([
    { name: 'BigMac', ingredient: 'salde tomate oignons', price: 6.5, image: 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt4e32a970bffd0792/61d866010f60435c58f20a0a/big-mac.png?auto=webp' },
    { name: 'Cheese Burger', ingredient: 'Chedar, steack', price: 3, image: 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt5718be23ff804bbe/61d86677d562a95eb8bd4179/cheeseburger.png?auto=webp' },
    { name: 'Filet O Fish', ingredient: 'poisson colin, tomate', price: 4.5, image: 'https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/MQ/filet-o-fish/Filet-O-Fish.png' },
    { name: '280', ingredient: 'steack 280 gramme', price: 6.5, image: 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6f16eb3040712590/61a623cc5e4d8458d1a71e8f/090eeba3e36f2aeaf47e0b0a6eda8c880cae345d.png?auto=webp' },
  ]);
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  return (
    <div className="App">
      <TopBar />
      <Nav />
      <MainContent burgerList={burgerList} cart={cart} setCart={setCart} cartValue={cartValue} setCartValue={setCartValue} />
    </div>
  );
}

export default App;
