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

    background-color: #fff;     
    border-radius: 8px;
    padding: 32px;

    width: 90%;
    max-width: 600px; 

    max-height: 80vh;
z-index: 10000;
    overflow-y: auto; 
    position: relative; 
    `;
    
export const CloseButton = styled.button`
    position: absolute; 
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${color.greySecondary};
    `;

export const RecipeTitle = styled.h2`
    font-size:18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${color.blackPrimary};
    text-transform: uppercase;
    margin-bottom:16px
    `;

export const RecipeImage = styled.img`
    width: 467px;
    height: 250px;
    border-radius: 8px;
    margin-bottom: 16px;
    `;

export const RecipeCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    `;
export const RecipeHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    `;  


export const RecipeRatingStar = styled.svg`
width: 12px;
height: 12px;
fill: #FFC107;
`;

export const RecipeCategory = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${color.blackPrimary};
border: 1px solid ${color.grayBorder};
    border-radius: 35px;
    padding: 8px 16px;


    `;
export const RecipeRating = styled.p`
    font-size: 14px;
    color: ${color.greySecondary};
    `;
 
export const RecipeTime = styled.p`
    font-size: 14px;
    color: ${color.greySecondary};

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
`;

export const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
  font-size: 14px;
  color: ${color.blackPrimary};
 border-bottom: 1px solid #e3e3e3;

  span:last-child {
    color: ${color.greySecondary}; 
  }
`;
export const InstructionText=styled.p`
margin-top:32px;
font-size:14px;
font-weight:400;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 295px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;


  @media screen and (min-width: 768px) {
    gap: 4px;

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
  padding: 14px 28px;
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
`;
export const RatingButton = styled.button`
padding: 14px 28px;
  background-color:transparent;
  color:${color.blackPrimary};
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