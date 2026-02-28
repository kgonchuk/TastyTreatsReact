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
  gap: 15px;
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
`;

export const FavoriteCategoryItem = styled.li`
  margin-bottom: 10px;
`;

export const FavoriteCategoryButton = styled.button`
  background-color: transparent ;
  border: solid 1px ${color.grayBorder};
  border-radius: 15px;
  padding: 14px 18px;
  cursor: pointer;
color: ${color.greyInput};
font-size: 14px;
font-weight:400;

  &:hover {
    background-color: #e0e0e0;
  }
`;  
export const AllButton = styled.button`
 background-color: transparent ;
  border: solid 1px ${color.grayBorder};
  border-radius: 15px;
  padding: 14px 18px;
  cursor: pointer;
color: ${color.greyInput};
font-size: 14px;
font-weight:400;

  &:hover {
    background-color: #e0e0e0;
  }`