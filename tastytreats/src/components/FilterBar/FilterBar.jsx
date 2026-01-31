import { useDispatch, useSelector } from "react-redux";
import { CloseIconBtn, FilterBarContainer, FilterBarOption, FilterBarWrapper, ResetButton, ResetWrapper, SearchIcon, SearchInput, SearchInputWrapper,SelectIngridients, SelectLabel, SelectRegion, SelectTime, SelectWrapper, customStyles } from "./FilterBar.styled"
import { setArea, setIngredient, setSearch, setTime } from "../../redux/recipes/recipesSlice";
import sprite from '../../assets/sprite.svg';
import Select from 'react-select';


export const FilterBar  = ({ areas, ingredients }) => {
    const dispatch = useDispatch();
  const { area, ingredient, time, title } = useSelector(state => state.recipes.filters);

  const timeOptions=Array.from({length: 6}, (_, i) => (i + 1) * 10); // [10, 20, 30, 40, 50, 60]
 
    return(
        <FilterBarContainer>
<FilterBarWrapper>

{/* Search */}
<SearchInputWrapper>
          <SelectLabel>Search</SelectLabel>
          <SearchInput
            placeholder="Enter Text"
            value={title || ''}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          {/* Іконка йде після інпута для роботи CSS селектора ~ */}
          <SearchIcon>
            <use href={`${sprite}#search`}></use>
          </SearchIcon>

          {/* Хрестик для очищення (з'являється лише коли є текст) */}
          {title && (
            <CloseIconBtn onClick={() => dispatch(setSearch(''))}>
              <svg>
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </CloseIconBtn>
          )}
        </SearchInputWrapper>

{/* Time */}
  <SelectWrapper style={{ width: '125px' }}>
    <SelectLabel>Time</SelectLabel>
  <Select
    styles={customStyles}
    placeholder="00 min"
    options={timeOptions.map(t => ({ value: t, label: `${t} min` }))}
    onChange={(opt) => dispatch(setTime(opt ? opt.value : null))}
    isSearchable={false} // Приховуємо клавіатуру на мобільних, якщо не треба писати
  />
  </SelectWrapper>

{/* Area */}
  <SelectWrapper style={{ width: '141px' }}>
    <SelectLabel>Area</SelectLabel>
     <Select
    styles={customStyles}
placeholder="Region"
    value={area ? { value: area, label: area } : null}
    options={areas.map(item => ({ value: item.name, label: item.name }))}
    onChange={(opt) => dispatch(setArea(opt ? opt.value : null))}
    isClearable
  />
  </SelectWrapper>

{/* Ingredients */}
  <SelectWrapper style={{ width: '188px' }}>
    <SelectLabel>Ingredients</SelectLabel>
      <Select
    styles={customStyles}
placeholder="Product"
    value={ingredient ? { value: ingredient, label: ingredient } : null}
    options={ingredients.map(item => ({ value: item.name, label: item.name }))}
    onChange={(opt) => dispatch(setIngredient(opt ? opt.value : null))}
    isClearable
  />
  </SelectWrapper>

 
</FilterBarWrapper>

 <ResetWrapper>
   
    <ResetButton onClick={() => {
      dispatch(setArea(null));
      dispatch(setIngredient(null));
      dispatch(setTime(null));
      dispatch(setSearch(""));
    }}> <svg width="16" height="16" style={{ marginRight: '8px' }} >
      <use href={`${sprite}#icon-close`}></use>
    </svg>
    Reset the filter
    </ResetButton>
  </ResetWrapper>
</FilterBarContainer>)
}