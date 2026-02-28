
import { FavoriteListContainer } from "./FavoriteList.styled"
import { selectFilteredFavorites } from "../../redux/selectors"
import { useSelector } from "react-redux"
import { RecipesItem } from "../RecipesItem/RecipesItem"

export const FavoriteList = () => {
   const favorites = useSelector(selectFilteredFavorites);


console.log("FAVORITES:", favorites);
    return(
       <FavoriteListContainer>
          {favorites.map(favorite => (
            <RecipesItem key={favorite._id} recipe={favorite} />
          ))}
       </FavoriteListContainer>
    )
}       