import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RecipesListContainer, RecipesWrap } from "./RecipesList.styled";
import { fetchRecipes } from "../../redux/operations";
import { RecipesItem } from "../RecipesItem/RecipesItem";

export const RecipesList = () => {
  const dispatch = useDispatch();

  const { category, area, ingredient, time, title } = useSelector(
    state => state.recipes.filters
  );
  const page = useSelector(state => state.recipes.page);
  const { items, isLoadingRecipes } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(
      fetchRecipes({
        category,
        area,
        ingredient,
        time,
        title,
        page,
        limit: 9,
      })
    );
  }, [dispatch, category, area, ingredient,time, title, page]);

  if (isLoadingRecipes) return <p>Loading...</p>;

  return (
    <RecipesListContainer>
      <RecipesWrap>
        {items.map(recipe => (
          <RecipesItem key={recipe._id} recipe={recipe} />
        ))}
      </RecipesWrap>
    </RecipesListContainer>
  );
};
