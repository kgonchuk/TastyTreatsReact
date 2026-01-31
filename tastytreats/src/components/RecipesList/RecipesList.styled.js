import styled from "styled-components";
export const RecipesListContainer = styled.div`
margin-top: 14px;
`;      

export const RecipesWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, 250px);
  gap: 16px; 
 max-width: 782px; 
  width: 100%;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;      