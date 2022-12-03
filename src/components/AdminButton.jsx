import React from 'react';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { UserContext } from '../Context/userContext';

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 90px;
`;
const CheckBoxTxt = styled.p``;
const Slider = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  background: ${(props) => props.ToogleSwitchBg};
  border-radius: 20px;
  border: 1px solid black;
`;
const SliderInsideSwitch = styled.span`
  transition: 0.6s ease-in-out;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;

  height: 37px;
  left: ${(props) => props.ToogleSwitch};
  background: ${(props) => props.ToogleAnimationSlider};
  border: 0.1px solid lightgray;
  border-radius: 50%;
`;
const LabelSwich = styled.label``;
const CheckBoxItem = styled.input`
  opacity: 0;
`;

function AdminSwitchButton(props) {
  const [ToogleAnimation, SetToogleAnimation] = useState('0px');
  const [ToogleBgAnimation, SetToogleBgAnimation] = useState('#d4d4d4');
  const [AdminActived, SetAdminActived] = useState('Activer mode admin');
  const [ToogleAnimationSlider, SetToogleAnimationSlider] = useState('white');
  const { currentUser } = useContext(UserContext);

  const HandleSwitchBtnAnimation = () => {
    if (ToogleAnimation === '0px') {
      SetToogleAnimation('260px');
      SetToogleBgAnimation('lightgreen');
      SetToogleAnimationSlider('black');
      SetAdminActived('Mode Admin Activé');
      // show admin pannel props source from main.component
      props.setIsPannelAdminShowed(true);
    } else {
      SetToogleAnimation('0px');
      SetToogleBgAnimation('#d4d4d4');
      SetToogleAnimationSlider('white');
      SetAdminActived('Activer mode admin');
      // show admin pannel props source from main.component
      props.setIsPannelAdminShowed(false);
    }
  };
  return (
    <>
      {currentUser.email === 'admin@food.com' && (
        <CheckBoxWrapper>
          <LabelSwich>
            <Slider ToogleSwitchBg={ToogleBgAnimation}>
              <CheckBoxItem type="checkbox" onClick={HandleSwitchBtnAnimation}></CheckBoxItem>
              <SliderInsideSwitch ToogleSwitch={ToogleAnimation} ToogleAnimationSlider={ToogleAnimationSlider}></SliderInsideSwitch>
              <CheckBoxTxt>{AdminActived}</CheckBoxTxt>
            </Slider>
          </LabelSwich>
        </CheckBoxWrapper>
      )}
    </>
  );
}

export default AdminSwitchButton;
