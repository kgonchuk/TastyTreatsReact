import styled from "styled-components";
export const RecipesListContainer = styled.div`

`;      

export const RecipesWrap = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 16px; 
  width: 100%;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;      