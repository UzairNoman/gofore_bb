import React, { useState, useEffect } from 'react';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const newTotalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(newTotalPages);
  }, [totalItems, itemsPerPage]);

  const handlePageChange = page => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => {
      const isActive = number === currentPage;
      return (
        <li key={number} className={`page-number ${isActive ? 'active' : ''}`} onClick={() => handlePageChange(number)}>
          {number}
        </li>
      );
    });
  };

  if (!totalItems || totalItems <= 0 || !itemsPerPage || itemsPerPage <= 0 || !currentPage || currentPage <= 0 || currentPage > totalPages) {
    return null;
  }

  return (
    <div className="pagination">
      <ul>
        {renderPageNumbers()}
      </ul>
    </div>
  );
}

export default Pagination;