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
  padding: 28px 20px;
  border-radius: 15px;
  width: 295px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
padding: 40px;
  max-width: 90%;
  }
`;


export const ModalTitle = styled.h2`
font-size: 18px;
font-weight: 600;
line-height: 1.22;
color: var(--text-color);
margin-bottom: 28px;
text-transform: uppercase;
 @media screen and (min-width: 768px) {
margin-bottom: 40px;
  }
`;

export const CloseButton = styled.button`
position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;

`;
export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--text-color);
  @media screen and (min-width: 768px) {
  width: 1em;
  height: 1em;
  }
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
  margin-bottom: 16px;
  border: 1px solid ${color.greyPrimary};
  border-radius: 15px;
  font-size: 1em;
  height: 48px;
  background-color:transparent;
   @media screen and (min-width: 768px) {
  margin-bottom: 18px;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 40px;
  border: 1px solid ${color.greyPrimary};
  border-radius: 15px;
  font-size: 1em;
  resize: vertical;
  background-color:transparent;
    @media screen and (min-width: 768px) {
  margin-bottom: 15px;
  }
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