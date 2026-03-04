import { BurrgerIcon, CartIcon, CartLink, FavoriteLink, HeaderBtnBox, HeaderContainer, HomeLink, LinkItem, LinkList, MobileMenuBtn, NavLinks, TitleLink, ToggleSwitchWrap } from "./Header.styled";
import sprite from '../../assets/sprite.svg';
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false);
   const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <HeaderContainer>
        <NavLinks>
        <LinkList>
        <LinkItem> <HomeLink to="/">Home</HomeLink></LinkItem>
        <LinkItem><FavoriteLink to="/favorites">Favorites</FavoriteLink></LinkItem>
        </LinkList>
     </NavLinks>
     <TitleLink to="/"><span>tasty</span>treats.</TitleLink>
     <HeaderBtnBox>
     <CartLink to="/">
     <CartIcon> 
      <use  href={`${sprite}#icon-shopping-cart`}  />
      </CartIcon>
      </CartLink>
      <ToggleSwitchWrap>
       <ToggleSwitch label="Enable Dark Mode" />
       </ToggleSwitchWrap>
       <MobileMenuBtn type="button" onClick={openMobileMenu}>
        <BurrgerIcon><use href={`${sprite}#icon-menu`}/></BurrgerIcon>
       </MobileMenuBtn>
       {isMobileMenuOpen && (<MobileMenu onClose={closeMobileMenu}/>)}

     </HeaderBtnBox>
    </HeaderContainer>
  );
}