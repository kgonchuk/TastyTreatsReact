import { AddButton, ButtonWrapper, CloseButton, EmptyHeartIcon, FillHeartIcon, IngredientItem, IngredientsList, InstructionText, ModalContent, ModalOverlay, RatingButton, RatingWrapper, RecipeCardHeader, RecipeCategory, RecipeDetails, RecipeHeaderInfo, RecipeImage, RecipeRating, RecipeRatingStar, RecipeTime, RecipeTitle, SectionTitle, VideoWrapper } from "./ModalRecipe.styled"
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { useState } from "react";
import { ModalRating } from "../ModalRating/ModalRating";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";





export const ModalRecipe = ({recipedInfo, onClose }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const{ title, rating, time, instructions, category} = recipedInfo;

  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
const handleModalOpen = (e) => {
  e.stopPropagation();
  setSelectedRecipeId(recipedInfo._id);
  setOpenModal(true);
};


  const ingredientsMap = useSelector(state =>
  state.ingredients.items.reduce((acc, item) => {
    acc[item._id] = item.name;
    return acc;
  }, {})
);
  
  const getEmbedUrl = (url) => {
    if (!url) return null;
    return url.replace("watch?v=", "embed/");
  };
const roundToHalf = (num) => Math.round(num * 2) / 2;

 const isFavorite = useSelector((state) =>
    state.favorites.favorites.some(
      (favorite) => favorite._id === recipedInfo._id
    )
  );
const toggleFavorites = () => {
   dispatch(toggleFavorite(recipedInfo));
  };


  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      
    
        <RecipeTitle>{title}</RecipeTitle>

        <VideoWrapper>
          {recipedInfo.youtube && (
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(recipedInfo.youtube)}
              title={recipedInfo.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>)}
           
        </VideoWrapper>

        <RecipeCardHeader>
          <RecipeCategory>#{category}</RecipeCategory>
          
     <RecipeHeaderInfo>
          <RatingWrapper>
            <RecipeRating>{roundToHalf(rating).toFixed(1)}</RecipeRating>
            <ReactStars
  count={5}
  value={roundToHalf(rating)}
  size={16}
  edit={false}
  isHalf={true}
  activeColor="#FFC107"
/>
          </RatingWrapper>
         
            <RecipeTime>{time} min</RecipeTime>
          </RecipeHeaderInfo>
        </RecipeCardHeader>

        <RecipeDetails>

          <IngredientsList>
  {recipedInfo.ingredients.map((ing, index) => (
    <IngredientItem key={index}>
      <span>{ingredientsMap[ing.id] || '—'}</span>
      <span>{ing.measure}</span>
    </IngredientItem>
  ))}
</IngredientsList>
     
          <InstructionText>{instructions}</InstructionText>
        </RecipeDetails>
       
   <ButtonWrapper>
   <AddButton type="button" onClick={toggleFavorites}>
  {isFavorite ? "Remove from " : "Add to "}
  {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
</AddButton>

            

   
    <RatingButton type="button" onClick={handleModalOpen}>Give a rating</RatingButton>
   </ButtonWrapper>


   {openModal && <ModalRating 
    onClose={() => setOpenModal(false)} 
    recipeId={selectedRecipeId} 
  />}
      </ModalContent>
    </ModalOverlay>
  );
};