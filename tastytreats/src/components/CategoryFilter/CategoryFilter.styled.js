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

export const AllButton = styled.button`
  padding: 14px 28px;
  border-radius: 15px;
  border: 1px solid ${color.grayBorder};
  background-color: ${({ active }) =>
    active ? "transparent" : color.greenPrimary};
  color: ${({ active }) => (active ? color.greySecondary : "#FFFFFF")};
  cursor: pointer;
`;

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

  &:hover {
    color: ${color.greenPrimary};
  }
`;


