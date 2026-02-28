
import { FavoriteListContainer } from "./FavoriteList.styled"
import { selectFilteredFavorites } from "../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { RecipesItem } from "../RecipesItem/RecipesItem"
import { Pagination } from "../Pagination/Pagination"
import { setPage } from "../../redux/recipes/recipesSlice"

export const FavoriteList = () => {
   const dispatch = useDispatch();
   const favorites = useSelector(selectFilteredFavorites);
   const page = useSelector(state => state.recipes.page);
   const totalPages = useSelector(state => state.recipes.totalPages);


console.log("FAVORITES:", favorites);
    return(
      <>
       <FavoriteListContainer>
          {favorites.map(favorite => (
            <RecipesItem key={favorite._id} recipe={favorite} />
          ))}
           {/* <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={(newPage) => dispatch(setPage(newPage))}
          /> */}
       </FavoriteListContainer>
       <Pagination
         totalPages={totalPages}
         currentPage={page}
         onPageChange={(newPage) => dispatch(setPage(newPage))}
       />
      </>
    )
}       