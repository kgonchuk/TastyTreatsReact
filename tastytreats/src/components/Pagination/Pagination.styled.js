import styled from "styled-components";
import color from "../../global/globalColors";


export const PaginatorWrap=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:8px;
margin-top:20px
`;
export const PaginatorBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: ${({ active }) =>
    active ? "#8BAA36" : "#fff"};
  color: ${({ active }) =>
    active ? "#fff" : "#000"};
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    color:${color.greySecondary};
    background: ${color.greenPrimary}
  }
`;