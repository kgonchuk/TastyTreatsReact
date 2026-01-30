import { FavoriteIcon, FavoriteIconWrap, RecipeBtn, RecipeCard, RecipeDescription, RecipeFooter, RecipeRatingStar, RecipeRatingValue, RecipeRatingWrap, RecipeTitle } from "./RecipesItem.styled"
import sprite from '../../assets/sprite.svg';
export const RecipesItem = ({recipe}) => {
    return (
       <RecipeCard key={recipe._id} backgroundImage={recipe.preview}>
        <FavoriteIconWrap>
        <FavoriteIcon >
<use  href={`${sprite}#heart`}  />
</FavoriteIcon>

        </FavoriteIconWrap>
       <RecipeTitle>{recipe.title} </RecipeTitle>
       <RecipeDescription>{recipe.description}</RecipeDescription>
    <RecipeFooter>

    <RecipeRatingWrap>
      <RecipeRatingValue>{recipe.rating.toFixed(1)}</RecipeRatingValue>
        <RecipeRatingStar xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><use  href={`${sprite}#star`}  /></RecipeRatingStar>
    </RecipeRatingWrap>

    <RecipeBtn>See recipe</RecipeBtn>

  </RecipeFooter>
       </RecipeCard>
    )
}
