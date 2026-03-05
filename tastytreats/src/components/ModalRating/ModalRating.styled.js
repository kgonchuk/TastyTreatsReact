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
   z-index: 99999;
    `;

export const ModalContent = styled.div`

    background-color: var( --bg-color);     
    border-radius: 8px;
    padding: 20px;
border:1px solid var( --border-rating-color);
    width: 295px;
    max-width: 335px;                   
    max-height: 80vh;
z-index: 10000;
    overflow-y: auto; 
    position: relative; 
    @media screen and (min-width: 768px) {
    width: 360px;
    max-width: 600px;                   
    max-height: 80vh;
    padding: 32px;
  }
    `;
    
export const CloseButton = styled.button`
    position: absolute; 
    top: 14px;
    right: 14px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text-color);
    width:20px;
    height:20px;
    @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
    `;      
export const RatingTitle = styled.h2`
    font-size:14px;
    font-weight: 600;
    margin-bottom: 4px;        
     color: var(--text-color);
     @media screen and (min-width: 768px) {
   font-size:18px;
    margin-bottom:16px;
  }
    `;  
export const StarsWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-bottom: 24px;
`;  
export const RatingValue = styled.span`
font-size: 16px;
font-weight: 500;
  color: var(--text-color);
`;  
export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
gap: 8px;
`;  
export const SubmitButton = styled.button`
padding: 14px 28px;
background-color:${color.greenPrimary};
color: #fff;
border: none;
border-radius: 15px;
cursor: pointer;
margin-top:14px;
width: 100%;
&:hover {
  background-color:${color.greenHover};
}
   @media screen and (min-width: 768px) {
margin-top:16px; 
  }
`;  


export const RatingInput=styled.input`  
width: 256px;    
padding: 14px 18px;
border: 1px solid  var( --text-color-grey);
background-color:transparent;
border-radius: 15px;
font-size: 14px;
color: ${color.blackPrimary};
outline: none;

&:focus {
  outline: none;
  border-color: ${color.greenPrimary};
}
   @media screen and (min-width: 768px) {
  width: 324px;  
  }
`;