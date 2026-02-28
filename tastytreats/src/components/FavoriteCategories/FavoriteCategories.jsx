  
import { useEffect, useState } from "react";
import {
  AllButton,
  FavoriteCategoriesContainer,
  FavoriteCategoryButton,
  FavoriteCategoryList
} from "./FavoriteCategories.styled";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setFavoriteCategory } from "../../redux/favorites/favoritesSlice";
import { selectFavoriteCategory } from "../../redux/selectors";

const API_URL =
  "https://tasty-treats-backend.p.goit.global/api/categories";

export const FavoriteCategories = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const active = useSelector(selectFavoriteCategory);

  const handleSelect = value => {
    dispatch(setFavoriteCategory(value));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(API_URL);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <FavoriteCategoriesContainer>
      <FavoriteCategoryList>
        <AllButton
          active={active === "All"}
          onClick={() => handleSelect("All")}
        >
          All categories
        </AllButton>

        {categories.map(({ name }) => (
          <FavoriteCategoryButton
            key={name}
            active={active === name}
            onClick={() => handleSelect(name)}
          >
            {name}
          </FavoriteCategoryButton>
        ))}
      </FavoriteCategoryList>
    </FavoriteCategoriesContainer>
  );
};