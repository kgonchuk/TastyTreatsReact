import styled from 'styled-components';
import color from '../../global/globalColors';

export const Wrapper = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  gap: 16px;
margin-top:25px;
`;

export const SearchInput = styled.input`
  padding: 10px 14px;
  border-radius: 24px;
  border: 1px solid ${color.grayBorder};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${color.greenPrimary};
  }
`;

// export const AllButton = styled.button`
//   padding: 14px 28px;
//   border-radius: 15px;
//   font-size: 18px;
//   font-weight: 500;

//   // background-color: ${({ active }) => active ? "var(--category-hover-bg)" : "var(--category-bg)"};
// background-color: ${({ active }) => active ? "var(--category-bg)" : "var(--category-hover-bg)"};


//   // color: ${({ active }) => active ? "var(--category-hover-text)" : "var(--category-text)"};
//     color: ${({ active }) => active ? "var(--category-text)" : "var(--category-hover-text)"};

//   // border: 1px solid
//   //   ${({ active }) => active ? "var(--category-hover-border)" : "var(--category-border)"};
//     border: 1px solid
//     ${({ active }) => active ? "var(--category-border)" : "var(--category-hover-border)"};

//   transition: all 0.3s ease;

//   &:hover {
//     background-color: var(--category-hover-bg);

//     color: var(--category-hover-text);
//     border-color: var(--category-hover-border);
//   }
// `;

export const AllButton = styled.button`
 padding: 14px 28px; 
border-radius: 15px; 
border: 1px solid ${color.grayBorder}; 
background-color: ${({ active }) => active ? "transparent" : color.greenPrimary}; 
// color: ${({ active }) => (active ? color.greySecondary : "#FFFFFF")}; 
cursor: pointer; 
border: 1px solid var(--border-color); 
border-color: 1px solid ${({ active }) => (active ? color.greenPrimary : "#FFFFFF")}; 
// color: #FFFFFF; 
// color: ${({ active }) => (active ? "#05050580" : "#FFFFFF")}
transition: all 0.3s ease; 
font-size:18px; 
font-weight:500; 
color:var( --category-text); 
&:hover { 

border-color: 1px solid ${color.greenPrimary}; 

color:var( --category-text); 

} `;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 260px;
  overflow-y: auto;
`;

export const CategoryButton = styled.li`
  font-size: 14px;
  color: ${({ active }) =>
    active ? color.greenPrimary : color.greyInput};
  cursor: pointer;
 color: var(--text-color-grey);
  &:hover {
    color: ${color.greenPrimary};
  }
`;


