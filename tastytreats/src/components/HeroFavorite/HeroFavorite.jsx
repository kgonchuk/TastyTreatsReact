import { FavoriteImg, HeroFavoriteContainer } from "./HeroFavorite.styled";
import hero from "../../images/hero.jpg"

export const HeroFavorite = () => {
  return (
    <HeroFavoriteContainer>
      <FavoriteImg src={hero} alt="favorite" />
    </HeroFavoriteContainer>
  );
};