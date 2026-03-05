import styled from "styled-components";
import color from "../../global/globalColors";
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

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
    padding: 40px 20px;
    width: 90%;
    max-width: 295px; 
    max-height: 80vh;
z-index: 10000;
    overflow-y: auto; 
    position: relative; 

  @media screen and (min-width: 768px) {
 max-width: 600px; 
 padding: 32px;
  }
    `;
    
export const CloseButton = styled.button`
    position: absolute; 
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text-color);
    @media screen and (min-width: 768px) {
   top: 10px;
    right: 10px;
  }
    `;

export const RecipeTitle = styled.h2`
    font-size:18px;
    font-weight: 600;
    color: var(--text-color);
    text-transform: uppercase;
    margin-bottom:14px
       @media screen and (min-width: 768px) {
   margin-bottom:16px
  }
    `;

export const RecipeCardHeader = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
 @media screen and (min-width: 768px) {
  display: flex;
    align-items: center;
    justify-content: space-between;
  }
    `;
export const RecipeHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
@media screen and (min-width: 768px) {
    gap: 8px;
  }
    `;  


export const RecipeRatingStar = styled.svg`
width: 12px;
height: 12px;
fill: #FFC107;
`;

export const RecipeCategory = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color);
border: 1px solid var(--category-input-text);
    border-radius: 35px;
    padding: 8px 16px;
    margin-bottom:24px;
@media screen and (min-width: 768px) {
   margin-bottom:0;
  }

    `;
export const RecipeRating = styled.p`
    font-size: 14px;
    color: var(--category-input-text);
    `;
 
export const RecipeTime = styled.p`
    font-size: 14px;
   color: var(--category-input-text);

    `;

export const RecipeDetails = styled.div`
    font-size: 16px;
    color: ${color.greyText};
    line-height: 1.5;
    `;      

export const IngredientsList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
     @media screen and (min-width: 768px) {
  gap: 14px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var( --order-bottom-color); 
  padding-bottom: 8px;
  font-size: 14px;
  color: var(--text-color);
list-style: none;
  span:last-child {
    color: var(--order-span-color); 
  }
 
`;
export const InstructionText=styled.p`
margin-top:24px;
font-size:14px;
font-weight:400;
color:var(  --order-text-color);
@media screen and (min-width: 768px) {
margin-top:32px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 295px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
 border-radius: 15px;
  }
`;
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  @media screen and (min-width: 768px) {
    gap: 6px;
  }
`;
export const Rating = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--tertiary-dark-txt-color);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 32px;
`;      
export const AddButton = styled.button`
  padding: 12px 24px;
  background-color:${color.greenPrimary};
  color: #FFFFFF;
  font-size:14px;
  font-weight:500;
  border: none;
  border-radius: 15px;
  cursor: pointer;

&:hover {
  color:${color.blackPrimary};
}
   @media screen and (min-width: 768px) {
     padding: 14px 28px;
  }
`;
export const RatingButton = styled.button`
padding: 14px 28px;
  background-color:transparent;
  color:var(--text-color);
    font-size:14px;
  font-weight:500;
  border: solid 1px ${color.greenPrimary};
  border-radius: 15px;
  cursor: pointer;
  margin-left: 8px;

&:hover {

  background-color:${color.greenPrimary};

}
`;
export const EmptyHeartIcon = styled(IoIosHeartEmpty)`
  fill:  #ffffff;
  stroke: red
  width: 22px;
  height: 22px;
  @media screen and (min-width: 768px) {
     width: 18px;
  height: 18px;
  } 
`;

export const FillHeartIcon = styled(IoMdHeart)`
  color: #ffffff;
  width: 22px;
  height: 22px;
    @media screen and (min-width: 768px) {
     width: 18px;
  height: 18px;
  } 
`;