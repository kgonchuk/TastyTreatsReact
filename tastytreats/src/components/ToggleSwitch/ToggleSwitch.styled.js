import styled from "styled-components";
import color from "../../global/globalColors";

export const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #333;
`;

export const SwitchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;


`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
    width: 0;       
    height: 0;
`;

export const StyledLabel = styled.label`
 position: relative; 
  display: block;
  overflow: hidden;
  cursor: pointer;
  width:48px;
  height: 20px;
  border-radius: 60px;
  background-color: ${color.greyPrimary || '#CECECE'};

  ${HiddenCheckbox}:checked + & {
    background-color: #5BB32C;
  }
`;
export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  ${HiddenCheckbox}:checked + ${StyledLabel} & {
    margin-left: 0;
  }

  &::before, &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    color: white;
    font-weight: bold;
  }

  &::before {
  
    content: "";
    padding-right: 20px;
  }

  &::after {
    content: "";
    padding-left: 20px;
  }
`;

export const Switch = styled.span`
  display: block;
  width: 18px; 
  height:18px; /* Adjust size */
  background: #fff;
  position: absolute;
  top: 0;
left: 0;
  border: 1px solid #ccc;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(243, 243, 243, 0.25);
pointer-events: none;
transform: ${props => (props.isChecked ? "translateX(28px)" : "translateX(0)")};

`;
