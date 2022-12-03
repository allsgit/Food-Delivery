import React from 'react';
import BurgerBackgroundImg from '../assets/images/backgroundBurger.jpeg';
import styled from 'styled-components';
import imgmock from '../assets/images/Burger stall logo - Fait avec PosterMyWall.png';
import { useRef, useState, useContext } from 'react';
import { UserContext } from '../Context/userContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

const InputWrapper = styled.form`
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
  .do-you-have-account {
    color: white;
  }
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
  margin: 10px 0;
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

const ErrorMsgSign = styled.p`
  font-size: 20px;
  color: red;
  z-index: 100;
`;

function HomeLoginPage() {
  const [errorMsg, setErrorMsg] = useState('');
  const passwordRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const { signUp, signIn, stayLog } = useContext(UserContext);

  const handleFormRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      setErrorMsg('inscription validé ! vous pouvez vous connecter');
      navigate('/');
    } catch (err) {
      setErrorMsg('Oops ! email et/ou mot de pass invalide');
    }
  };

  const handleFormConnection = async (e) => {
    e.preventDefault();
    try {
      const foo = stayLog(emailRef.current.value, passwordRef.current.value);
      const cred = await signIn(emailRef.current.value, passwordRef.current.value);
      setErrorMsg('connexion...');
      navigate('/private/Order');
    } catch (err) {
      setErrorMsg('Oops ! email et/ou mot de pass invalide');
    }
  };

  return (
    <HomePageWrapper>
      <BackImg src={BurgerBackgroundImg}></BackImg>
      <InputWrapper>
        <LogTitleWelcome>Bienvenue chez Vous !</LogTitleWelcome>
        <Separator></Separator>
        <BrandLogo src={imgmock}></BrandLogo>
        <LogTxt>Votre Email</LogTxt>
        <LoginNameInput placeholder="Veuillez entrer votre adresse email..." type="email" ref={emailRef}></LoginNameInput>
        <LogTxt>Votre mot de passe</LogTxt>
        <LoginNameInput placeholder="Veuillez entrer votre mot de passe..." type="password" ref={passwordRef}></LoginNameInput>
        <LoginSubmit onClick={handleFormConnection}>Connection</LoginSubmit> */
        {/*         <LoginSubmit onClick={handleFormRegister}>inscription</LoginSubmit> */}
        <div className="do-you-have-account">vous n'avez pas de compte ? cliquer ici</div>
        <ErrorMsgSign>{errorMsg}</ErrorMsgSign>
      </InputWrapper>
    </HomePageWrapper>
  );
}

export default HomeLoginPage;
