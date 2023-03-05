import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';
import './../styles/BookList.css';
const BookList = ({ books, onThumbnailClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookListItem
          key={book?.key}
          title={book?.title}
          author={book?.author_name}
          firstPubYear={book?.first_publish_year}
          isbn={book.isbn ? book.isbn[0] : '-'}
          coverId={book?.cover_i}
          handleClick={() => onThumbnailClick(book)}
        />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author_name: PropTypes.arrayOf(PropTypes.string),
      first_publish_year: PropTypes.number,
      isbn: PropTypes.arrayOf(PropTypes.string),
      cover_i: PropTypes.number,
    })
  ).isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};

export default BookList;