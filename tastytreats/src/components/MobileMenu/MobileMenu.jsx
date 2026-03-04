import { CloseBtn, ContainerMenu, IconClose, Menu, MenuWrap, MobileNav, Overlay, ToggleSwitchWrapMobile } from "./MobileMenu.styled"
import sprite from '../../assets/sprite.svg';
import { FavoriteLink, HomeLink, ToggleSwitchWrap } from "../Header/Header.styled";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";


export const MobileMenu = ({ onClose }) => {
  const handleBackDropClick = (e) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
};

  return (
    <Overlay onClick={handleBackDropClick}>
      <Menu onClick={e => e.stopPropagation()}>
        <ContainerMenu>
          <CloseBtn type="button" onClick={onClose}>
            <IconClose>
              <use href={`${sprite}#icon-close`} />
            </IconClose>
          </CloseBtn>
<MenuWrap>
<MobileNav>
   <HomeLink to="/" onClick={onClose}>Home</HomeLink>
   <FavoriteLink to="/favorites" onClick={onClose}>Favorites</FavoriteLink>
</MobileNav>

 <ToggleSwitchWrapMobile>
       <ToggleSwitch label="Enable Dark Mode" />
</ToggleSwitchWrapMobile>
       </MenuWrap>
       
        </ContainerMenu>
      </Menu>
    </Overlay>
  );
};