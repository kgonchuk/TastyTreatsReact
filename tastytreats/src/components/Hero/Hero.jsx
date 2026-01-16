import { useState } from "react";
import RecipeSwiper, { Slide } from "../SwiperSlide/SwiperSlide";
import { HeroButton, HeroContainer, HeroSlideBlock, HeroSubtitle, HeroTextBlock, HeroTitle, HeroWrapper } from "./Hero.styled";
import { ModalOrder } from "../ModalOrder/ModalOrder";

export const Hero = () => {
 const [openModal, setOpenModal] = useState(false);
     const handlModalOpen = () => {
    setOpenModal(true);
  };
  return (
    <HeroContainer>
        <HeroWrapper>
        <HeroTextBlock>
            <HeroTitle>Learn to Cook <span>Tasty Treats'</span>  Customizable Masterclass</HeroTitle>
            <HeroSubtitle>TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides.</HeroSubtitle>
            <HeroButton type="button" onClick={handlModalOpen}>Order now</HeroButton>
        </HeroTextBlock>
        <HeroSlideBlock>
            <RecipeSwiper />
        </HeroSlideBlock>
        </HeroWrapper>
        {openModal && (<ModalOrder closeModal={() => setOpenModal(false)} />)}
    </HeroContainer>
  );
}