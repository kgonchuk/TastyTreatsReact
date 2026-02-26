import { FavoriteIcon, FavoriteIconWrap, RecipeBtn, RecipeCard, RecipeDescription, RecipeFooter, RecipeRatingStar, RecipeRatingValue, RecipeRatingWrap, RecipeTitle } from "./RecipesItem.styled"
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from "react";
import { ModalRecipe } from "../ModalRecipe/ModalRecipe";
import ReactStars from "react-stars";




export const RecipesItem = ({recipe}) => {
const { _id, title, description, preview, rating} = recipe;
const [openModal, setOpenModal] = useState(false);

const handlModalOpen = (e) => {
  if (e) e.stopPropagation();
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
 
};
const roundToHalf = (num) => Math.round(num * 2) / 2;


    return (
      <>
       <li key={_id}>
       <RecipeCard  $backgroundImage={preview}>
        <FavoriteIconWrap>
        <FavoriteIcon >
<use  href={`${sprite}#heart`}  />
</FavoriteIcon>

        </FavoriteIconWrap>
       <RecipeTitle>{title} </RecipeTitle>
       <RecipeDescription>{description}</RecipeDescription>
    <RecipeFooter>

    <RecipeRatingWrap>
      <RecipeRatingValue>{roundToHalf(rating).toFixed(1)}</RecipeRatingValue>
       <ReactStars
    count={5}
    value={rating}
    size={16}
    edit={false}
    isHalf={true}
    activeColor="#FFC107"
  />

    </RecipeRatingWrap>

   <RecipeBtn onClick={(e) => handlModalOpen(e)}>
  See recipe
</RecipeBtn>
  </RecipeFooter>

  
       </RecipeCard>
      {openModal && ( <ModalRecipe recipedInfo={recipe} onClose={handleCloseModal}/>)}
      </li>
       </>
    )
}
