import RecipeSwiper, { Slide } from "../SwiperSlide/SwiperSlide";
import { HeroButton, HeroContainer, HeroSlideBlock, HeroSubtitle, HeroTextBlock, HeroTitle, HeroWrapper } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrapper>
        <HeroTextBlock>
            <HeroTitle>Learn to Cook <span>Tasty Treats'</span>  Customizable Masterclass</HeroTitle>
            <HeroSubtitle>TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides.</HeroSubtitle>
            <HeroButton>Order now</HeroButton>
        </HeroTextBlock>
        <HeroSlideBlock>
            <RecipeSwiper />
        </HeroSlideBlock>
        </HeroWrapper>
    </HeroContainer>
  );
}