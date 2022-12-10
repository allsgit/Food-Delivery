import React from 'react';
import BurgerBackgroundImg from '../assets/images/backgroundBurger.jpeg';
import styled from 'styled-components';
import imgmock from '../assets/images/Burger stall logo - Fait avec PosterMyWall.png';
import { useRef, useState, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import ResgisterForm from '../components/ResgisterForm';
import { DataContext } from '../context/dataContext';
import Advices from '../components/Advices';

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  flex-direction: columb;
  filter: ${(props) => (props.registerBlurToogle === true ? 'blur(1px)' : '')};
`;

const BackImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  z-index: 1;
`;

const InputWrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 700px;
  border-radius: 20px;
  margin-top: 50px;

  .brand-logo {
    position: absolute;
    bottom: 290px;
    width: 40%;
    top: -200px;
    z-index: 10;
  }
  .head-title {
    color: #f2a832;
    font-size: 25px;
    margin-bottom: 10px;
    font-size: 40px;
    z-index: 10;
  }
  .separator {
    width: 400px;
    height: 3px;
    background: #f2a832b2;
    margin: 20px 0;
    border-radius: 5px;
  }
  .input-titles {
    color: white;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .login-submit {
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
  }
  .do-you-have-account {
    color: white;
    cursor: pointer;
    z-index: 10;
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
const ErrorMsgSign = styled.p`
  font-size: 20px;
  color: ${(props) => (props.errorMsg === 'connexion...' ? 'lightgreen' : 'red')};
  z-index: 100;
  margin: 10px;
`;

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState('');
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const { signUp, signIn, stayLog } = useContext(UserContext);
  const { registerToogle, setRegisterToogle } = useContext(DataContext);

  const handleFormConnection = async (e) => {
    e.preventDefault();
    try {
      const foo = stayLog(emailRef.current.value, passwordRef.current.value);
      const cred = await signIn(emailRef.current.value, passwordRef.current.value);
      setErrorMsg('connexion...');
      setTimeout(() => {
        navigate('/private/Order');
      }, 1100);
    } catch (err) {
      setErrorMsg('Oops ! email et/ou mot de pass invalide');
    }
  };
  return (
    <>
      <Advices />
      <BackImg src={BurgerBackgroundImg}></BackImg>

      <HomePageWrapper registerBlurToogle={registerToogle}>
        <InputWrapper>
          <div className="head-title">Bienvenue chez Vous !</div>
          <span className="separator"></span>
          <img className="brand-logo" src={imgmock} alt="" />
          <p className="input-titles">Votre Email</p>
          <LoginNameInput placeholder="Veuillez entrer votre adresse email..." type="email" ref={emailRef}></LoginNameInput>
          <p className="input-titles">Votre mot de passe</p>
          <LoginNameInput placeholder="Veuillez entrer votre mot de passe..." type="password" ref={passwordRef}></LoginNameInput>
          <button className="login-submit" onClick={handleFormConnection}>
            Connection
          </button>
          <p className="do-you-have-account" onClick={() => setRegisterToogle(true)}>
            vous n'avez pas de compte ? cliquer ici
          </p>
          <ErrorMsgSign errorMsg={errorMsg}>{errorMsg}</ErrorMsgSign>
          {errorMsg === 'connexion...' && (
            <Circles
              height="20"
              width="20"
              color="orange"
              margin="10px"
              ariaLabel="circles-loading"
              wrapperStyle={{ marginRight: 10 }}
              wrapperClass=""
              visible={true}
            />
          )}
        </InputWrapper>
      </HomePageWrapper>

      {registerToogle === true && <ResgisterForm registerBlurToogle={setRegisterToogle} />}
    </>
  );
}
