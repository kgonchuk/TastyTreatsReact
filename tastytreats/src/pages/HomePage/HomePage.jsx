import { HomePageContainer, MainSection, RecipesListContainer, RecipesWrap } from "./HomePage.styled";
import { Hero } from "../../components/Hero/Hero";
import { PopupularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import { useState } from "react";
import { CategoriesFilter } from "../../components/CategoryFilter/CategoryFilter";
import { RecipesList } from "../../components/RecipesList/RecipesList";


export const HomePage = () => {
    const [category, setCategory] = useState(null);
  return (
   <HomePageContainer>
    <Hero />
    <MainSection>
      <RecipesListContainer> 
<RecipesWrap>
     <CategoriesFilter onChange={setCategory} />
     <PopupularRecipes />
</RecipesWrap>

<RecipesList/>
 </RecipesListContainer>
    </MainSection>

   </HomePageContainer>
  );
}