import styled from 'styled-components';
import color from '../../global/globalColors';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';




export const RecipeCard = styled.article`
  padding: 16px;
  position: relative;
 width: 303px;
  height: 303px;
  border-radius: 8px;
   @media screen and (min-width: 768px) {

   width: 218px;
  height: 287px;
   border-radius: 12px;
  }

background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  

`;

export const FavoriteIconWrap = styled.div`
position: absolute;
top: 16px;
right: 16px;
width: 22px;
height: 22px;
z-index: 2;
cursor: pointer;
 @media screen and (min-width: 768px) {
top: 12px;
right: 12px;
width: 32px;
height: 32px;
  }
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
  margin-top: 16px;
  z-index: 2;
   @media screen and (min-width: 768px) {
 margin-top: 12px;
  }
`;  
export const RecipeRatingWrap = styled.div`
display: flex;
align-items: center;
gap: 4px;

`;

export const RecipeRatingValue = styled.p`
font-size: 14px;
font-weight: 600;
color: #ffffff; 
 @media screen and (min-width: 768px) {
font-size: 12px;
  }
`;

export const RecipeRatingStar = styled.svg`
width: 12px;
height: 12px;
margin-left: 4px;

fill: #FFC107;
`;    

export const RecipeBtn= styled.button`
padding: 8px 14px;
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
 @media screen and (min-width: 768px) {
padding: 8px 16px;
  }
`;  

export const FavoriteBtn = styled.button`
padding:0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background: var(--main-accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-accent-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 0;
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
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
