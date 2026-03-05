import styled from "styled-components";
import color from "../../global/globalColors";

export const FavoriteCategoriesContainer = styled.div`
margin-top: 20px;
`;

export const FavoriteCategoryList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  overflow-x: auto;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: ${color.grayBorder} transparent;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.grayBorder};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
   @media screen and (min-width: 768px) {
 gap: 15px;
  }
`;

export const FavoriteCategoryItem = styled.li`
  margin-bottom: 24px;
   @media screen and (min-width: 768px) {
  margin-bottom: 10px;
  }
`;

export const FavoriteCategoryButton = styled.button`
  background-color: transparent ;
  border: solid 1px var(--text-color-grey);
  border-radius: 15px;
  padding: 14px 18px;
  cursor: pointer;
color: var(--pagination-border-color);
font-size: 14px;
font-weight:400;

  &:hover {
    background-color: ${color.greenPrimary};
    border-color:${color.greenPrimary};
    color: #fff;
  }
`;  
export const AllButton = styled.button`
 background-color: transparent ;
   border: solid 1px var(--text-color-grey);
  border-radius: 15px;
  padding: 14px 18px;
  cursor: pointer;
color: var(--pagination-border-color);
font-size: 14px;
font-weight:400;

  &:hover {
     background-color: ${color.greenPrimary};
    border-color:${color.greenPrimary};
    color: #fff;
  }`