
import { FavoriteImg, FavoritePageContainer } from "./FavoritePage.styled";
import hero from "../../images/hero.jpg"
import { FavoriteCategories } from "../../components/FavoriteCategories/FavoriteCategories";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";



export const FavoritePage = () => {

  return (
  <FavoritePageContainer>
    <FavoriteImg src={hero} alt="favorite" />
    <FavoriteCategories />
    <FavoriteList />
  </FavoritePageContainer>
  );
}