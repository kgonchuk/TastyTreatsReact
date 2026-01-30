import styled from 'styled-components';
import color from '../../global/globalColors';





export const RecipeCard = styled.article`
padding: 16px;
position: relative;
  width: 250px;
  height: 287px;
  border-radius: 12px;
  overflow: hidden;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(5, 5, 5, 0) 0%,
      rgba(5, 5, 5, 0.6) 100%
    );
    z-index: 1;
  }
`;

export const FavoriteIconWrap = styled.div`
position: absolute;
top: 12px;
right: 12px;
width: 32px;
height: 32px;
z-index: 2;
cursor: pointer;
`;
export const FavoriteIcon=styled.svg`
width: 16px;
height: 16px;
fill: ${props => (props.isFavorite ? 'red' : 'gray')};
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
  color: #ffffff;
  z-index: 2;
`;

export const RecipeDescription = styled.p`
  font-size: 12px;
font-weight: 400;
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #ffffff;
  z-index: 2;
`;
export const RecipeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  z-index: 2;
`;  
export const RecipeRatingWrap = styled.div`
display: flex;
align-items: center;
gap: 4px;

`;

export const RecipeRatingValue = styled.p`
font-size: 12px;
font-weight: 600;
color: #ffffff; 
`;

export const RecipeRatingStar = styled.svg`
width: 12px;
height: 12px;
margin-left: 4px;
// fill: #000000;
fill: #FFC107;
`;    

export const RecipeBtn= styled.button`

padding: 8px 16px;
background-color:${color.greenPrimary};
color: #FFFFFF;
border: none;
border-radius: 8px;
font-size: 12px;
font-weight: 500;
cursor: pointer;
z-index: 2;

&:hover {
  background-color:transparent;
  color:${color.greenPrimary};
  border: 1px solid ${color.greenPrimary};  
}
`;  