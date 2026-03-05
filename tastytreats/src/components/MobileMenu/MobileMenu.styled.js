import styled from 'styled-components'
import color from '../../global/globalColors';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
`;

export const ContainerMenu = styled.div`
  position: relative;
  height: 100%;
  width:200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color:var(--bg-mobileMenu-color);
`;

export const Menu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  background-color: ${color.whitePrimary};
  z-index: 1001;

  transform: translateX(0);
  animation: slideIn 300ms ease forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuWrap=styled.div`

`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;


export const IconClose = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #fff;
  fill:#fff;
`;


export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top:200px;
  margin-left:54px;
`;
export const ToggleSwitchWrapMobile=styled.div`
margin-top:300px;
 @media screen and (min-width: 320px) and (max-width: 375px) {
 
  }
   @media screen and (min-width: 768px) {

  }
`;