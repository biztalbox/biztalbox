import { useState, useEffect } from "react";

type PaginationResult<T> = {
  currentItems: T[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  currentPage: number;
};

function usePagination<T>(items: T[], itemsPerPage: number, initialPage?: number): PaginationResult<T> {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage || 1);

  // Update itemOffset when currentPage changes
  useEffect(() => {
    if (initialPage) {
      const newOffset = ((initialPage - 1) * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      setCurrentPage(initialPage);
    }
  }, [initialPage, itemsPerPage, items.length]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
    currentPage,
  };
}

export default usePagination;