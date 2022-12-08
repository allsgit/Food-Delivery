import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';
import { DataContext } from 'Context/dataContext';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const RegisterWrapper = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: white;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 10000;
  .register-title {
    color: #f2a832;
    margin-bottom: 10px;
    font-size: 23px;
    z-index: 10;
    margin: 10px 0;
  }
  .submit {
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
  .email,
  .password {
    padding: 0 0 0 10px;
    border-radius: 10px;
    width: 50%;
    margin-bottom: 10px;
    height: 60px;
    background: #F1F1F1;
    z-index: 100;
    font-size: 19px;
    border: none;
    &::placeholder {
      font-size: 16px;
    }
  }
  .arrow-temporaire {
    background-color: red;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default function ResgisterForm() {
  const navigate = useNavigate();
  const { signUp } = useContext(UserContext);
  const { registerToogle, setRegisterToogle } = useContext(DataContext);
  const [registerSuccess, setRegisterSuccess] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleFormRegister = async (e) => {
    e.preventDefault();
    try {
      const cred = await signUp(emailRef.current.value, passwordRef.current.value);
      console.log(cred);
      setRegisterSuccess('inscription validé !! vous pouvez vous connecter');
      setTimeout(() => {
        navigate('/');
        setRegisterToogle(false);
        setRegisterSuccess('');
      }, 2000);
    } catch (err) {
      /*       setErrorMsg('Oops ! email et/ou mot de pass invalide'); */
    }
  };
  return (
    <>
      <RegisterWrapper>
        <span className="arrow-temporaire" onClick={() => setRegisterToogle(false)}>
          retour
        </span>
        <p className="register-title">Veuillez renseigner les champs pour valider votre inscription</p>
        <p className="email-txt">Email</p>
        <input type="text" className="email" ref={emailRef} />
        <p className="password-txt">password</p>
        <input type="password" className="password" ref={passwordRef} />
        <button className="submit" onClick={(e) => handleFormRegister(e)}>
          Inscription
        </button>
        {registerSuccess}
      </RegisterWrapper>
    </>
  );
}
