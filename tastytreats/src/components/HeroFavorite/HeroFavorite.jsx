import { FavoriteImg, HeroFavoriteContainer } from "./HeroFavorite.styled";
import herofavoriteMobile from "../../images/herofavoritemobile.jpg";
import hero from "../../images/hero.jpg";

export const HeroFavorite = () => {
  return (
    <HeroFavoriteContainer>
      <picture>
        <source srcSet={herofavoriteMobile} media="(max-width: 767px)" />
        <source srcSet={hero} media="(min-width: 768px)" />
        <FavoriteImg src={hero} alt="favorite" />
      </picture>
    </HeroFavoriteContainer>
  );
};