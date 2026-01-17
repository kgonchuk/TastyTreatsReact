import { RecipeContent, RecipeDescription, RecipeImage, RecipesGrid, RecipeTitle } from "./PopularRecipesItem.styled";

export const PopularRecipesItem = ({ recipe }) => {
  return (
    <RecipesGrid key={recipe._id}>
      <RecipeImage src={recipe.preview} alt={recipe.title} />
      <RecipeContent>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeDescription>{recipe.description}</RecipeDescription>
      </RecipeContent>
    </RecipesGrid>
  );
};