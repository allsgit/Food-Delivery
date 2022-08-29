import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const timerForAdminMsg = keyframes`
 0% { opacity: 0;transform: translate(-200px) }
 100% { opacity: 1;transform: translate(0) }
`;

const ShowPannelAdminAnim = keyframes`

 0% {
    transform: translateX(600px);
    visibility: visible
} 100% { 
    transform: translateX(0) ;
    visibility: visible;
}

`;
const HidePannelAdminAnim = keyframes`
 0% { transform: translateX(0px)}
 100% { transform: translateX(600px) }
`;
const HighLightTxt = keyframes`

 0% {
   transform: translate(10px);
} 100% { 
  transform: translate(0px);
}

`;
const PannelMsg = styled.p`

animation:0.6s ${HighLightTxt} alternate infinite`;
const MsgBlockWrapper = styled.div`
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  z-index: 1000000;
  right: 20px;
  width: 200px;
  height: 50px;
  background-color: lightgray;
  transform: translate(300px);
  border-radius: 5px;
  animation: 1s ${ShowPannelAdminAnim} forwards,
    1.3s ${HidePannelAdminAnim} forwards;
  animation-delay: 0.4s, 4.4s;
`;
const TimerBar = styled.span`
  display: flex;
  align-items: center;
  z-index: 1000000;
  right: 0;
  width: 100%;
  height: 30%;
  margin-top: 4px;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    transform: translate(600px);
    background-color: #de8604;
    animation: 2s ${timerForAdminMsg} forwards;
    animation-delay: 1.2s;
  }
`;

export default function MsgAdminActive() {
  return (
    <MsgBlockWrapper>
      <PannelMsg>PANNEL ADMIN ACTIVÉ</PannelMsg>
      <TimerBar></TimerBar>
    </MsgBlockWrapper>
  );
}
