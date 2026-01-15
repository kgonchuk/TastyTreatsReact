import styled from "styled-components"; 
import color from "../../global/globalColors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
  color: ${color.blackPrimary};
  &:hover {
    
  }
  &.active {
    color: ${color.greenPrimary};
  }
`;      
export const FavoriteLink = styled(NavLink)`
text-decoration: none;
 color: ${color.blackPrimary};
  &:hover {
    
  }
   &.active {
    color: ${color.greenPrimary};
  }
`;  
export const TitleLink = styled(NavLink)`
text-decoration: none;
  font-size: 18px;
  color: ${color.blackPrimary};
  font-family: 'Inter', sans-serif;
   font-weight: 600;
  margin: 0;
  span {
    color: ${color.greenPrimary};
  }
`;  

export const CartLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &:hover {
    color: #000;
  }
`;
export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;

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