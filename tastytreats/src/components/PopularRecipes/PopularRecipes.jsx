import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularRecipes } from '../../redux/operations';
import { PoopularRecipesSection, RecipeCard, RecipeContent, RecipeDescription, RecipeImage, RecipesGrid, RecipeTitle, SectionTitle } from './PopularRecipes.styled';
import { PopularRecipesItem } from '../PopularRecipesItem/PopularRecipesItem';

export const PopupularRecipes = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(
    state => state.popularRecipes
  );

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PoopularRecipesSection>
<SectionTitle>Popular recipes</SectionTitle>
  
    <RecipeCard>
{items.map(recipe => (
<PopularRecipesItem key={recipe._id} recipe={recipe} />
))}

     
    </RecipeCard>

    </PoopularRecipesSection>
  );
}
   

