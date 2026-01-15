import styled from "styled-components";
import color from "../../global/globalColors";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
margin-top: 100px;       
margin-bottom: 100px;

padding: 0 0 0 100px;

`;

export const HeroTextBlock = styled.div`
width: 446px;
`;  

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${color.blackPrimary};
  text-transform: uppercase;
  span { 
    color: ${color.greenPrimary};
    
  }
margin-bottom: 16px;

`;

export const HeroSubtitle = styled.h2`
  font-size: 16px;
  color: ${color.blackPrimary};
 font-weight: 400;
line-height: 24px;
`;

export const HeroButton = styled.button`
  padding: 14px 28px;
  font-size: 14px;
  color: ${color.blackPrimary};
background-color: white;
  border: 1px solid ${color.greenPrimary};
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: darken(${color.greenPrimary}, 10%);
  }
    margin-top: 32px;
`;  
export const HeroSlideBlock = styled.div`
// height: 871;
width: 702px;

`;    
export const HeroWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;    