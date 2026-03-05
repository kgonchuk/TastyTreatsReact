import styled from "styled-components"; 

export const RecipesGrid = styled.div`
display : flex; 
    flex-direction: row;        
    gap: 16px;
    overflow-x: auto;
    margin-bottom: 35px;   
   @media screen and (min-width: 768px) {
   gap: 8px;
   width:176px;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 64px;
  width: 64px;
  border-radius: 8px;
  object-fit: cover;
   @media screen and (min-width: 768px) {
  border-radius: 6px;
   height: 48px;
  width: 48px;
  }
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
  color:var(--popular-text);
@media screen and (min-width: 768px) {

  
  }
`;

export const RecipeDescription = styled.p`
  font-size: 12px;
fnt-weight: 400;
  color:var(--popular-text);
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
     @media screen and (min-width: 768px) {
    font-size: 10px;
  }
     @media screen and (min-width: 1280px) {
font-size: 14px;
  }
`;          