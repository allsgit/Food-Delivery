import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

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
`;
const ProfilName = styled.p`
  margin-right: 0;
  width: 200px;
`;

const LogginLogout = styled.p`
  margin-right: 5px;
  font-size: 13px;
  margin: 0;
`;
function IconProfil() {
  return (
    <>
      <ProfilInfoWrapper>
        <div>
          <ProfilName>Bonjour !</ProfilName>
          <LogginLogout>
            <Link to="/">Se deconnecter</Link>
          </LogginLogout>
        </div>
      </ProfilInfoWrapper>
    
    </>
  );
}

export default IconProfil;
