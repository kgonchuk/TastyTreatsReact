
import styled from "styled-components";
import color from "../../global/globalColors";

export const SwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width:375px;

  .swiper-slide {
    width: auto;
  }

  .swiper-pagination {
    position: static;
    margin-top: 16px;
    text-align: center;
  }

 

  .swiper-pagination-bullet {
    background: var(  --text-color);
  }
     .swiper-pagination-bullet-active {
    background: ${color.greenPrimary};
  }
 @media screen and (min-width: 768px) {
padding-left: 80px;
}
`;

export const SmallCard = styled.div`
  width: 80px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
   @media screen and (min-width: 768px) {
 width: 137px;
  height: 442px;
}
`;

export const LargeCard = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background:
    radial-gradient(
      circle at center,
      rgba(80, 120, 60, 0.35) 0%,
      rgba(0, 0, 0, 0.85) 65%,
      #000 100%
    );

    @media screen and (min-width: 768px) {
 width: 351px;
  height: 442px;
}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
   @media screen and (min-width: 768px) {
transform: scale(1.5);
  }
`;



export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    transparent 60%
  );
`;

export const Content = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  color: white;

  h3 {
    font-size: 10px;
    margin-bottom: 8px;
  }

  p {
    font-size: 8px;
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
 h3 {
    font-size: 20px;

  }
     p {
    font-size: 14px;
    opacity: 0.8;
  }
  }
`;
