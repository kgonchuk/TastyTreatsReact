import styled from 'styled-components';
import color from '../../global/globalColors';

export const Wrapper = styled.div`


@media screen and (min-width: 768px) {
  width: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;
margin-top:25px;
  }

  @media screen and (min-width: 1280px) {
width: 235px;
  }

`;


export const AllButton = styled.button`
 padding: 14px 28px; 
border-radius: 15px; 
border: 1px solid ${color.grayBorder}; 
background-color: ${({ active }) => active ? "transparent" : color.greenPrimary}; 
cursor: pointer; 
border: 1px solid var(--border-color); 
border-color: 1px solid ${({ active }) => (active ? color.greenPrimary : "#FFFFFF")}; 
transition: all 0.3s ease; 
font-size:18px; 
font-weight:500; 
color:var( --category-text);
margin-bottom:24px;
&:hover { 
border-color: 1px solid ${color.greenPrimary}; 
color:var( --category-text); 
} 
@media screen and (min-width: 768px) {
  margin-bottom:0;
  width:176px;
  }


`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: 260px;
  overflow-y: auto;
  height:198px;
  @media screen and (min-width: 768px) {
 height:100%;
  gap: 24px;

  @media screen and (min-width: 1280px) {
   gap: 10px;
  }
  }
`;

export const CategoryButton = styled.li`
  font-size: 14px;
  color: ${({ active }) =>
    active ? color.greenPrimary : color.greyInput};
  cursor: pointer;
 color: var(--text-color-grey);
  &:hover {
    color: ${color.greenPrimary};
  }
`;


