import React from "react";
const BookThumbnail = ({ coverId, title, author, handleClick }) => {
    const thumbnailUrl = coverId ? `http://covers.openlibrary.org/b/id/${coverId}-S.jpg` : '/no-image.jpg';
  
    return (
      <div  data-testid="book-thumbnail" className="book-thumbnail" onClick={handleClick}>
        <img src={thumbnailUrl} alt={title} />
        <p>{title}</p>
        <p>{author}</p>
      </div>
    );
  };
  
  export default BookThumbnail;