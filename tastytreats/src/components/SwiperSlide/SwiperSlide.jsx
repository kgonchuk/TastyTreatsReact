

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import chef1 from "../../images/shef1.png";
import card1 from "../../images/card1.png";
import bigcard1 from "../../images/bigCard.png";
import chef2 from "../../images/shef2.png";
import card2 from "../../images/card2.png";
import bigcard2 from "../../images/bigcard2.png";
import chef3 from "../../images/shef3.png";
import card3 from "../../images/card3.png";
import bigcard3 from "../../images/bigcard3.png";
import color from "../../global/globalColors";



const recipes = [
  { id: 1, image: chef1, variant: "small" },
  { id: 2, image: card1, variant: "large" },
  { id: 3, image: bigcard1, variant: "large" },
  { id: 4, image: chef2, variant: "small" },
  { id: 2, image: card2, variant: "large" },
  { id: 3, image: bigcard2, variant: "large" },
  { id: 4, image: chef3, variant: "small" },
  { id: 2, image: card3, variant: "large" },
  { id: 3, image: bigcard3, variant: "large" },
];

const RecipeSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
      >
        {recipes.map((item) => (
          <SwiperSlide key={item.id}>
            <Card $variant={item.variant}>
              <Image src={item.image} alt="" />
              <Overlay />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default RecipeSwiper;


const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1280px;   /* ❗ ОБМЕЖУЄ viewport */
  overflow: hidden;   /* ❗ третій слайд обрізається */
 padding:40px 0 56px;
  .swiper {
    overflow: hidden;
  }

  .swiper-slide {
    width: auto;
  }
    .swiper-wrapper{
    margin-left: 80px;   /* ❗ прибирає відступ зліва */
    }
    .swiper-pagination{
   position:static;
    margin-top:16px;
    text-align:center;

    color:${color.blackPrimary}
    }
    .swiper-pagination-bullet-active{
      background-color:${color.greenPrimary};
      }


    .swiper-button-prev, .swiper-button-next{
display:none;
    }
    
`;

const Card = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  flex-shrink: 0;
  height: 420px;

  ${({ $variant }) =>
    $variant === "small"
      ? `
        width: 137px;   /* 1-й вузький */
      `
      : `
        width: 351px;   /* 2-й і далі широкі */
      `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    transparent 60%
  );
`;

