

import { PaginatorBtn, PaginatorWrap } from "./Pagination.styled";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <PaginatorWrap>
      {/* Перша сторінка */}
      <PaginatorBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        «
      </PaginatorBtn>

      {/* Попередня */}
      <PaginatorBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </PaginatorBtn>

      {/* Ліва крапка */}
      {currentPage > 2 && <span>...</span>}

      {/* Номери */}
      {pages.map(page => (
        <PaginatorBtn
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginatorBtn>
      ))}

      {/* Права крапка */}
      {currentPage < totalPages - 1 && <span>...</span>}

      {/* Наступна */}
      <PaginatorBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </PaginatorBtn>

      {/* Остання */}
      <PaginatorBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        »
      </PaginatorBtn>
    </PaginatorWrap>
  );
};