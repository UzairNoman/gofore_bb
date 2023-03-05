import React from 'react';
import PropTypes from 'prop-types';
import BookThumbnail from './BookThumbnail';
import './../styles/BookGrid.css'

/**
 * Component to display books in grid
 */
const BookGrid = ({ books, onThumbnailClick }) => {
  return (
    <div key={1} className="book-grid">
      {books.map((book) => (
        <div key={book.key} className='book-grid-item'>
            <BookThumbnail
                title={book.title}
                author={book.author_name}
                coverId={book.cover_i}
                handleClick={() => onThumbnailClick(book)}
                />
        </div>  
      ))}
    </div>
  );
};

BookGrid.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author_name: PropTypes.arrayOf(PropTypes.string),
      cover_i: PropTypes.number,
    })
  ).isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};

export default BookGrid;
