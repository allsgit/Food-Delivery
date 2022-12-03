import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../Context/userContext';
import { useContext } from 'react';

const IconProfilWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 30px;
  margin-left: 5px;
  border: 0.1px solid grey;
  margin-right: 100px;
`;
const ProfilInfoWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hello-user {
    margin-right: 0;
    width: 200px;
  }
`;

function IconProfil() {
  const { logOut } = useContext(UserContext);

  return (
    <>
      <ProfilInfoWrapper>
        <div>
          <p className="hello-user">Bonjour !</p>
          <button className="logout-button" onClick={logOut}>
            Se deconnecter
          </button>
        </div>
      </ProfilInfoWrapper>
    </>
  );
}

export default IconProfil;
