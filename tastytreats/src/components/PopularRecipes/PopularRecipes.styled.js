import styled from 'styled-components';
import color from "../../global/globalColors";


export const PoopularRecipesSection = styled.div`
  padding: 40px 20px;
  background-color: #fff;

`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 30px;
  color:${color.blackPrimary};
`;

export const RecipeCard = styled.div`
width:235px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

