import styled from 'styled-components';

export const PoopularRecipesSection = styled.div`

  background-color: transparent;
margin-top:40px;
 @media screen and (min-width: 768px) {
margin-top:64px;
  }
   @media screen and (min-width: 768px) {
width:176px;
  margin-top:64px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 20px;
  color:var(--popular-text);
  @media screen and (min-width: 768px) {
  font-size: 18px;
  margin-bottom: 30px;
  
  }
`;

export const RecipeCard = styled.div`
width:100%;
 background-color: transparent;


  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
     @media screen and (min-width: 768px) {
width:235px;
  }
`;

