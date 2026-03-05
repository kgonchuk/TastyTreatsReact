import styled from "styled-components";
import color from "../../global/globalColors";

export const HeroContainer = styled.section`
padding-bottom: 80px;
@media screen and (min-width: 768px) {
 padding-bottom: 100px;
  }
`;

export const HeroTextBlock = styled.div`
max-width: 100%;

  @media screen and (min-width: 768px) {
 margin-bottom:64px;
    width:446px;
  }
`;  

export const HeroTitle = styled.h1`
font-size: 26px;
  line-height: 1.2;
  margin-bottom: 14px;
  text-transform: uppercase;
  color: var(--text-color);

  span {
    color: ${color.greenPrimary};
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
    width:446px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  
  
`;

export const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: var(--text-color);
background-color:transparent;
  border: 1px solid ${color.greenPrimary};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: darken(${color.greenPrimary}, 10%);
  }
    margin-top: 28px;
    margin-bottom: 48px;

 @media screen and (min-width: 768px) {
padding: 14px 28px;
 border-radius: 15px;
   margin-top: 32px;
    margin-bottom: 0;
  }
`;  
export const HeroSlideBlock = styled.div`
width: 100%;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    // width: 702px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    // width: 800px;
  }

`;    
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  
  }
      @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
`;    