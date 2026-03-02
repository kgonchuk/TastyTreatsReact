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
  transition: 0.3s ease;

  background: ${({ active, nav, disabled }) => {
    if (disabled) return "#050505"; // чорний
    if (active) return "var(--category-hover-bg)";
    if (nav) return "var(--category-hover-bg)";
    return "transparent";
  }};

  color: ${({ active, nav, disabled }) => {
    if (disabled) return "#F8F8F880"; // світло-сірий текст
    if (active || nav) return "#fff";
    return "var(--pagination-color)";
  }};

  border: 1px solid ${({ active, nav, disabled }) => {
    if (disabled) return "#050505"; 
    if (active || nav) return "var(--category-hover-border)";
    return "var(--pagination-border-color)";
  }};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background: var(--category-hover-bg);
    color: #fff;
    border: 1px solid var(--category-hover-border);
  }
`;