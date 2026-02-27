
import { useEffect, useState } from "react";
import { CloseButton, ModalContent, ModalOverlay, RatingInput, RatingLabel, RatingTitle, RatingValue, StarsWrapper, SubmitButton } from "./ModalRating.styled";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { patchRating } from "../../redux/operations";
import { resetRatingForm } from "../../redux/rating/ratingSlice";

export const ModalRating = ({ recipeId, onClose }) => {
  const [rating, setRating] = useState(0);
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

const ratingChanged = (newRating) => {
 setRating(newRating);
};

 useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  const handleSubmit = () => {
  dispatch(
    patchRating({
      id: recipeId,
      data: { rate: Math.round(rating), email },
    })
  )
    .unwrap()
    .then(() => {
      dispatch(resetRatingForm());
      onClose();
    })
    .catch((error) => {
  console.error("Rating error:", error);
});
};

useEffect(() => {
}, [recipeId]);

    return (
       <ModalOverlay onClick={handleCloseOnBackdrop}>
        <ModalContent>
            <CloseButton onClick={onClose}>
                &times;
            </CloseButton>  
<RatingTitle>Rating:</RatingTitle>
<StarsWrapper>
   <RatingValue>{rating.toFixed(1)}</RatingValue>

  <ReactStars
    count={5}
    value={rating}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    edit={true}
    activeColor="#FFC107"
  />
</StarsWrapper>
 {/* <Formik initialValues={{ email: '' }} onSubmit={(values) 
 => console.log(values)}> {({ values, handleChange, handleSubmit })
  => ( <form onSubmit={handleSubmit}> 
  <RatingLabel htmlFor="email"></RatingLabel> 
  <RatingInput id="email" name="email" type="email" 
  placeholder="Enter email" value={values.email} 
  onChange={handleChange} /> 
  <SubmitButton type="submit">Send</SubmitButton> </form> )}
   </Formik> */} 
   <RatingInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
   <SubmitButton onClick={handleSubmit} disabled={!rating}> Send </SubmitButton>
      </ModalContent>
       </ModalOverlay>
    );
}