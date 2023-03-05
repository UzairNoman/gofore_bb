import React from 'react';
import '../styles/BookListItem.css';

/**
 * Child component of BookList, to show single item in a list style
 */
const BookListItem = ({ title, author_name, first_publish_year, isbn, coverId, handleClick }) => {
  const imgUrl = coverId ? `http://covers.openlibrary.org/b/id/${coverId}-S.jpg` : '/no-image.jpg';

  return (
    <div data-testid="book-item" className='row book-list-item' onClick={handleClick}>
      <div className='col-md-3'>
        <img
          src={imgUrl}
          alt={title ? title : "No title"}
          className='img-fluid'
        />
      </div>
      <section className='col-md-9'>
        <h5 className='book-list-item-title'>{title}</h5>
        <p className='book-list-item-author'>Author: {author_name ? author_name.join(', ') : 'N/A'}</p>
        <p className='book-list-item-year'>First Published: {first_publish_year || 'N/A'}</p>
        <p className='book-list-item-isbn'>ISBN: {isbn ? isbn[0] : 'N/A'}</p>
      </section>
    </div>
  );
};

export default BookListItem;