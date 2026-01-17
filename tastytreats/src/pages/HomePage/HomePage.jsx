import { HomePageContainer, MainSection } from "./HomePage.styled";
import { Hero } from "../../components/Hero/Hero";
import { PopupularRecipes } from "../../components/PopularRecipes/PopularRecipes";


export const HomePage = () => {
  return (
   <HomePageContainer>
    <Hero />
    <MainSection>
     <PopupularRecipes />
    </MainSection>

   </HomePageContainer>
  );
}