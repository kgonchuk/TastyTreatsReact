import { CartIcon, CartLink, FavoriteLink, HeaderBtnBox, HeaderContainer, HomeLink, LinkItem, LinkList, NavLinks, SwitcherButton, SwitcherContainer, Title, TitleLink } from "./Header.styled";
import sprite from '../../assets/sprite.svg';
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const Header = () => {
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
     <CartLink href="/cart"><CartIcon> <use  href={`${sprite}#icon-shopping-cart`}  /></CartIcon></CartLink>
       <ToggleSwitch label="Enable Dark Mode" />
     </HeaderBtnBox>
    </HeaderContainer>
  );
}