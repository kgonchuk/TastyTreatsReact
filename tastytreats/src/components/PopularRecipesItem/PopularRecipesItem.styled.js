import styled from "styled-components"; 
import color from "../../global/globalColors";

export const RecipesGrid = styled.div`
display : flex; 
    flex-direction: row;        
    gap: 16px;
    overflow-x: auto;
    margin-bottom: 35px;   

`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 64px;
  width: 64px;
  border-radius: 6px;
  object-fit: cover;
`;
export const RecipeContent = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;

`;
export const RecipeTitle = styled.h3`
  font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
text-transform: uppercase;
margin-bottom: 8px;
  color: ${color.blackPrimary};
`;

export const RecipeDescription = styled.p`
  font-size: 14px;
fnt-weight: 400;
  color: ${color.greyText};
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;          