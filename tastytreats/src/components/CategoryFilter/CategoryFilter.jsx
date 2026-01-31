import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Wrapper,
  CategoriesList,
  CategoryButton,
  AllButton,
  CategoryInputWrapper,
  SearchInput,
  AreaButton,
} from './CategoryFilter.styled';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/recipes/recipesSlice';

const API_URL =
  'https://tasty-treats-backend.p.goit.global/api/categories';

export const CategoriesFilter = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState('All');

  const dispatch = useDispatch();

  const handleSelect = value => {
    const categoryValue = value === 'All' ? '' : value;
    setActive(value);
    dispatch(setCategory(categoryValue));
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(API_URL);
      setCategories(data);
    };

    fetchCategories();
  }, []);


  return (
    <Wrapper>

        <AllButton
        active={active === 'All'} onClick={() => handleSelect('All')}
      >
        All categories
      </AllButton>
       

      <CategoriesList>
       {categories.map(({ name }) => (
          <CategoryButton
           key={name}
            active={active === name}
            onClick={() => handleSelect(name)}
          >
            {name}
          </CategoryButton>
        ))}
      </CategoriesList>
    </Wrapper>
  );
};
