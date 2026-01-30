import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Wrapper,
  SearchInput,
  CategoriesList,
  CategoryButton,
  AllButton,
} from './CategoryFilter.styled';

const API_URL =
  'https://tasty-treats-backend.p.goit.global/api/categories';

export const CategoriesFilter = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(API_URL);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = value => {
    setActive(value);
    onChange?.(value === 'All' ? null : value);
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <AllButton
        active={active === 'All'}
        onClick={() => handleSelect('All')}
      >
        All categories
      </AllButton>

      <CategoriesList>
        {filteredCategories.map(({ name }) => (
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
