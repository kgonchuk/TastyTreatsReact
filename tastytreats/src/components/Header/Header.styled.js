import styled from "styled-components"; 
import color from "../../global/globalColors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 64px;

  @media screen and (min-width: 768px) {
    padding: 32px 0 80px;
  }

  @media screen and (min-width: 1280px) {
    padding: 44px 0 100px;
  }
`;
export const LinkList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
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
   display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;  

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: #F8F8F8;
  transition: color 0.3s ease;
  &.active {
    color: #fff;
  }
 @media screen and (min-width: 768px) {
     color: var(--link-color);

 &:hover {
    color: var(--link-hover);
  }

  &.active {
    color: #9BB537;
  }

  }
    
`;      
export const FavoriteLink = styled(NavLink)`
text-decoration: none;
  color: #F8F8F8;

   &.active {
    color: #fff;
  }

   @media screen and (min-width: 768px) {
     color: var(--link-color);
  }
`;  
export const TitleLink = styled(NavLink)`
text-decoration: none;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
   font-weight: 600;
  margin: 0;
 color: ${color.blackPrimary};
  transition: color 0.3s ease;
color: var(--text-color);
  &:hover {
    color: var(--link-hover);
  }
  span {
   color: ${color.greenPrimary};
  }
    @media screen and (min-width: 320px) and (max-width: 375px) {
 
  }
   @media screen and (min-width: 768px) {
  font-size: 18px;
  }
`;  

export const CartLink = styled(NavLink)`
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
gap:14px;
@media screen and (min-width: 768px) {
gap:24px
}
`;
export const ToggleSwitchWrap=styled.div`
display:none;
 @media screen and (min-width: 320px) and (max-width: 375px) {

  }
   @media screen and (min-width: 768px) {
 display:flex;
  }
`;
export const MobileMenuBtn=styled.button`
padding:0;
  @media screen and (min-width: 768px) {
  display:none;
  }
`;
export const BurrgerIcon=styled.svg`
width:24px;
height:24px;
color:var(  --text-color);
stroke:var(  --text-color);
`;