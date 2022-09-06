import React from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Link } from 'react-router-dom';
import BurgerBackgroundImg from './assets/images/backgroundBurger.jpeg';
import styled from 'styled-components';
import imgmock from './assets/images/Burger stall logo - Fait avec PosterMyWall.png';
import { useRef, useState, useContext } from 'react';
import { UserContext } from './Context/userContext';

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
  const passWordRef = useRef();
  const emailRef = useRef();
  const firebaseConfig = {
    apiKey: 'AIzaSyA6a7jYguMMMenUGaQ7iXpGrcUQwD5Ch7k',
    authDomain: 'food-delivery-de4d2.firebaseapp.com',
    projectId: 'food-delivery-de4d2',
    storageBucket: 'food-delivery-de4d2.appspot.com',
    messagingSenderId: '161796174047',
    appId: '1:161796174047:web:3735594e449fea685a796a',
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const { setIsAuth } = useContext(UserContext);
  const { setAuthInfo } = useContext(UserContext);

  //*signUp and SignIn FirebaseMethod
  const signUp = () => {
    console.log(emailRef.current.value);
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passWordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setErrorMsg('Inscription validé, vous pouvez vous connecter');
        setAuthInfo(auth);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
          setErrorMsg('email invalide ou manquant');
        } else if (errorCode === 'auth/missing-email') {
          setErrorMsg('email manquant');
        } else if (errorCode === 'auth/weak-password') {
          setErrorMsg(
            'Votre mot de passe doit contenir 6 caractères au minimum'
          );
        } else if (errorCode === 'auth/internal-error') {
          setErrorMsg('mot de passe manquant');
        }

        // ..
      });
  };
  const signIn = (e) => {
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passWordRef.current.value
    )
      .then((userCredential) => {
        setIsAuth(true);
        const user = userCredential.user;
        console.log(user);
        setErrorMsg('loggin correct ! ');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsAuth(false);
        if (errorCode === 'auth/invalid-email') {
          setErrorMsg('veuillez entrer vos identifiants');
        }
        // ..
      });
  };

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
          ref={emailRef}
        ></LoginNameInput>
        <LogTxt>Votre mot de passe</LogTxt>
        <LoginNameInput
          placeholder="Veuillez entrer votre mot de passe..."
          type="email"
          ref={passWordRef}
        ></LoginNameInput>
        <LoginSubmit onClick={() => signIn()}>
          <Link to="/LoggedOrder/Order">Connection</Link>
        </LoginSubmit>
        <LoginSubmit onClick={() => signUp()}>inscription</LoginSubmit>
        <ErrorMsgSign>{errorMsg}</ErrorMsgSign>
      </InputWrapper>
    </HomePageWrapper>
  );
}
// ooooooopopopop

// dddd@gmail.com
export default HomeLoginPage;
