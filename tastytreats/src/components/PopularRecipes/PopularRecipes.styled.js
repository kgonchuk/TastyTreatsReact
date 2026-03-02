import styled from 'styled-components';
import color from "../../global/globalColors";


export const PoopularRecipesSection = styled.div`

  background-color: transparent;
margin-top:64px;

`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 30px;
  color:var(--popular-text);
`;

export const RecipeCard = styled.div`
width:235px;
 background-color: transparent;


  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

