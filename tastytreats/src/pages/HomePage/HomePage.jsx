import { FilterContainer, HomePageContainer, MainSection, RecipesListContainer, RecipesWrap } from "./HomePage.styled";
import { Hero } from "../../components/Hero/Hero";
import { PopupularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import { useEffect, useState } from "react";
import { CategoriesFilter } from "../../components/CategoryFilter/CategoryFilter";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useDispatch } from "react-redux";
import { fetchAreaRecipes, fetchIngredientsRecipes } from "../../redux/operations";


export const HomePage = () => {
const dispatch = useDispatch();
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    dispatch(fetchAreaRecipes()).then(res => setAreas(res.payload));
    dispatch(fetchIngredientsRecipes()).then(res => setIngredients(res.payload));
  }, [dispatch]);
  return (
   <HomePageContainer>
    <Hero />
    <MainSection>
      <RecipesListContainer> 
     
<RecipesWrap>
     <CategoriesFilter  />
     <PopupularRecipes />
</RecipesWrap>

<FilterContainer>
   <FilterBar areas={areas} ingredients={ingredients}/>
<RecipesList/>
</FilterContainer>

 </RecipesListContainer>
    </MainSection>

   </HomePageContainer>
  );
}