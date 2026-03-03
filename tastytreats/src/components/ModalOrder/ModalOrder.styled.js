import styled from "styled-components";
import color from "../../global/globalColors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
position: relative;
  background-color: var(--bg-color);
  padding: 40px;
  border-radius: 15px;
  // width: 440px;
    max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;


export const ModalTitle = styled.h2`
font-size: 18px;
font-weight: 600;
line-height: 1.22;
color: var(--text-color);
margin-bottom: 40px;
text-transform: uppercase;
`;

export const CloseButton = styled.button`
position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;

`;
export const CloseIcon = styled.svg`
  width: 1em;
  height: 1em;
  fill: var(--text-color);
`;

export const ModalBody = styled.div`
  display: flex;
      flex-direction: column;



`;      
export const Label = styled.label`
  font-weight: 500;
font-size: 14px;
line-height: 1.21;
color: var(--category-input-text);
margin-bottom: 8px;

`;
export const Input = styled.input`
  margin-bottom: 18px;
  border: 1px solid ${color.greyPrimary};
  border-radius: 15px;
  font-size: 1em;
  height: 48px;
  background-color:transparent;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid ${color.greyPrimary};
  border-radius: 15px;
  font-size: 1em;
  resize: vertical;
  background-color:transparent;
  
`;

export const SubmitButton = styled.button`
  background-color: ${color.greenPrimary};
  color: #fff;
  padding: 16px;
  border: none;
  border-radius: 15px;
  font-size: 1em;
  cursor: pointer;
margin-top: 40px;
  &:hover {
    background-color: darken(${color.greenPrimary}, 10%);
  }
`;      