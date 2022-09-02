import React from 'react';
import { Link } from 'react-router-dom';
import BurgerBackgroundImg from './assets/images/backgroundBurger.jpeg';
import styled from 'styled-components';
import imgmock from './assets/images/Burger stall logo - Fait avec PosterMyWall.png';

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
`;

const BackImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 700px;
  /*   background-color: #f2a832dc;
 */
  border-radius: 20px;
  margin-top: 50px;
`;
const LoginNameInput = styled.input`
  text-align: center;
  border-radius: 10px;
  width: 50%;
  margin-bottom: 10px;
  height: 60px;
  background: white;
  z-index: 100;
  font-size: 19px;
  border: none;
  &::placeholder {
    font-size: 16px;
  }
`;
const PasswordNameInput = styled(LoginNameInput)`
  margin-bottom: 0;
`;

const LoginSubmit = styled.button`
  margin: 30px 0;
  height: 60px;
  width: 50%;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  z-index: 100;
  transition: 0.1s;
  background: #f2a832;
  &:active {
    transform: scale(0.98);
    border: 1px solid black;
    transform: translateX(3px);
  }
`;

const BrandLogo = styled.img`
  position: absolute;
  bottom: 290px;
  width: 40%;
  top: -200px;
`;

const LogTxt = styled.p`
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
`;
const LogTitleWelcome = styled.p`
  color: #f2a832;
  font-size: 25px;
  margin-bottom: 10px;
  font-size: 40px;
`;
const LoosingPW = styled.p`
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Separator = styled.span`
  width: 400px;
  height: 3px;
  background: #f2a832b2;
  margin: 20px 0;
  border-radius: 5px;
`;

function HomeLoginPage() {
  return (
    <HomePageWrapper>
      <BackImg src={BurgerBackgroundImg}></BackImg>
      <InputWrapper>
        <LogTitleWelcome>Bienvenue chez nous !</LogTitleWelcome>
        <Separator></Separator>
        <BrandLogo src={imgmock}></BrandLogo>
        <LogTxt>Votre Email</LogTxt>
        <LoginNameInput
          placeholder="Veuillez entrer votre adresse email..."
          type="email"
        ></LoginNameInput>
        <LoginSubmit>
          <Link to="/order">Connection</Link>
        </LoginSubmit>
      </InputWrapper>
    </HomePageWrapper>
  );
}

export default HomeLoginPage;
