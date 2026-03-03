import styled from "styled-components";
import color from "../../global/globalColors";

export const FilterBarContainer = styled.div`
`;  
export const FilterBarWrapper = styled.div` 
 display: flex;
  gap: 16px;
  align-items: flex-end;
  `;  
export const SelectWrapper = styled.div` 
  display: flex;
  flex-direction: column;

  `;  

export const SelectLabel = styled.label` 
font-size: 14px;
font-weight: 500;
color: ${color.greySecondary};
margin-bottom: 8px;
color:var( --category-input-text);

`;

export const FilterBarOption = styled.option`
font-size: 14px;
font-weight: 500;
color: ${color.greySecondary};
`;  

export const SearchIcon=styled.svg`
  position: absolute;
  left: 12px;
  top: 70%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: transparent;
  // stroke: ${color.greySecondary};
   stroke: var( --category-input-text);
  transition: stroke 250ms ease;
  pointer-events: none;

`;  

export const SearchInput = styled.input`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 48px;
width: 230px;

  border-radius: 15px;
  border: 1px solid var( --category-input-text);
  font-size: 14px;
background-color: transparent;
  &:focus {
    outline: none;
    border-color: ${color.greenPrimary};
  }

  &:hover ~ ${SearchIcon},
  &:focus ~ ${SearchIcon} {
    stroke: ${color.greenPrimary};
    fill: ${color.greenPrimary};
  }
`;

export const CloseIconBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 70%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  svg {
    width: 18px;
    height: 18px;
    stroke:${color.black};
    fill: ${color.black};
  }
`;
export const SearchInputWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;

`;

export const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: '100%',
    height: '46px',
    backgroundColor: 'transparent',
    border:'1px solid var(--category-input-text)',
    borderRadius: '14px',
    padding: '0 14px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.25',
    color: 'var(--category-input-text)',
    cursor: 'pointer',
    boxShadow: 'none',
    borderColor: state.isFocused ? '#9BB537' : 'rgba(5, 5, 5, 0.2)', 
    '&:hover': {
      borderColor: '#9BB537',
    },
  }),
  singleValue: (base) => ({
  ...base,
  color: 'var(--popular-text)',
}),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
    
  }),
  placeholder: (base) => ({
    ...base,
    color: 'var(--category-input-text)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
     color: 'var(--category-input-text)',
    transition: 'transform 250ms ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    '&:hover': {
      color: '#050505',
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: '4px',
    padding: '8px 4px',
    backgroundColor: 'var(--filter-otion-color)',
    borderRadius: '14px',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)', 
    border: 'none',
    overflow: 'hidden',
    zIndex: 9999,
  }),
  menuPortal: (base) => ({
  ...base,
  zIndex: 9999,
}),
  menuList: (base) => ({
    ...base,
    maxHeight: '180px', 
    padding: '0',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--text-color)',
      borderRadius: '12px',
      
    },
  }),
  option: (base, state) => ({
    ...base,
    fontSize: '14px',
    fontWeight: '400',
    color: state.isSelected
    ? 'var(--category-hover-bg)'
    : 'var(--text-color-grey)',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: '6px 14px',
    transition: 'color 250ms ease',
    
    '&:hover': {
      color: '#050505',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
  }),
};
export const ResetWrapper = styled.div`
position: relative;
margin-top: 14px;   
display: flex;
  justify-content: flex-end; /* Притискає кнопку до правого краю */
  width: 100%;

`;
export const ResetButton = styled.button`
background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  font-size: 12px;
  font-weight: 500;
   color:var(--category-input-text);
  transition: color 250ms ease;

  display: flex;
    align-items: center;

  &:hover {
    color: ${color.greenPrimary};
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    stroke: ${color.greenPrimary};
    fill: ${color.greenPrimary};
  }
`;
