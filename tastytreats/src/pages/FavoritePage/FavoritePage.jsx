
import { FavoriteImg, FavoritePageContainer } from "./FavoritePage.styled";
import hero from "../../images/hero.jpg"
import { FavoriteCategories } from "../../components/FavoriteCategories/FavoriteCategories";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { HeroFavorite } from "../../components/HeroFavorite/HeroFavorite";



export const FavoritePage = () => {

  return (
  <FavoritePageContainer>
    {/* <FavoriteImg src={hero} alt="favorite" /> */}
    <HeroFavorite />
    <FavoriteCategories />
    <FavoriteList />
  </FavoritePageContainer>
  );
}