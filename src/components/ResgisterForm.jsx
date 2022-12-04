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
  width: 50%;
  height: 50%;
  background-color: white;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 10000;
  .submit {
    background-color: #f2a832;
    width: 200px;
    height: auto;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      background-color: green;
    }
  }
  .email,
  .password {
    margin: 10px;
    border-radius: 8px;
    width: 30%;
    height: 10%;
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
        setRegisterToogle(true);
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
        Veuillez renseigner les champs pour valider votre inscription
        <p className="email-txt">Email</p>
        <input type="text" className="email" ref={emailRef} />
        <p className="password-txt">password</p>
        <input type="text" className="password" ref={passwordRef} />
        <button className="submit" onClick={(e) => handleFormRegister(e)}>
          Inscription
        </button>
        {registerSuccess}
      </RegisterWrapper>
    </>
  );
}
