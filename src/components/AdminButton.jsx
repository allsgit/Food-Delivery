import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const CheckBoxWrapper = styled.div`
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

  const HandleSwitchBtnAnimation = () => {
    if (ToogleAnimation === '0px') {
      SetToogleAnimation('260px');
      SetToogleBgAnimation('#f69110');
      SetToogleAnimationSlider('black');
      SetAdminActived('Mode Admin Activé');
      // show admin pannel props source from main.component
      props.ShowAdminPannel(true); 
    } else {
      SetToogleAnimation('0px');
      SetToogleBgAnimation('#d4d4d4');
      SetToogleAnimationSlider('white');
      SetAdminActived('Activer mode admin');
      // show admin pannel props source from main.component
     props.ShowAdminPannel(false);
 }
  };
  return (
    <CheckBoxWrapper>
      <LabelSwich>
        <Slider ToogleSwitchBg={ToogleBgAnimation}>
          <CheckBoxItem
            type="checkbox"
            onClick={HandleSwitchBtnAnimation}
          ></CheckBoxItem>
          <SliderInsideSwitch
            ToogleSwitch={ToogleAnimation}
            ToogleAnimationSlider={ToogleAnimationSlider}
          ></SliderInsideSwitch>
          <CheckBoxTxt>{AdminActived}</CheckBoxTxt>
        </Slider>
      </LabelSwich>
    </CheckBoxWrapper>
  );
}

export default AdminSwitchButton;
