import styled from "styled-components"; 
import color from "../../global/globalColors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 44px 0 44px 100px;
`;
export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 0;
`;
export const LinkItem = styled.li`
 color: ${color.blackPrimary};
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;

`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
`;  

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: var(--link-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-hover);
  }

  &.active {
    color: #9BB537;
  }
`;      
export const FavoriteLink = styled(NavLink)`
text-decoration: none;
  color: var(--link-color);
  &:hover {
    
  }
   &.active {
    color: ${color.greenPrimary};
  }
`;  
export const TitleLink = styled(NavLink)`
text-decoration: none;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
   font-weight: 600;
  margin: 0;
 color: ${color.blackPrimary};
  transition: color 0.3s ease;
color: var(--text-color);
  &:hover {
    color: var(--link-hover);
  }

  // &.active {
  //   color: #9BB537;
  // }
  span {
   color: ${color.greenPrimary};
  }
`;  

export const CartLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
 color: var(--link-color);
  transition: color 0.3s ease;

  &:hover {
    fill: var(--link-hover);
  }

  &.active {
    color: #9BB537;
  }
`;
export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: var(--icon-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--icon-hover);
  }

`;  

export const SwitcherButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const HeaderBtnBox = styled.div`
  display: flex;
  align-items: center;
gap:24px
`;