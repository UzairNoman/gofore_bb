import React from 'react';
import './../styles/Pagination.css';
/**
 * Pagination component
 */
const Pagination = ({ booksPerPage,activePage, totalBooks, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-link'>
            <button onClick={() => paginate(number)} className={`pagination-btn ${activePage === number ? 'active' : ''}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;