import React, { useState } from 'react';
import axios from 'axios';

const OpenLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('environment');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const [displayMode, setDisplayMode] = useState('grid');
  const [selectedBook, setSelectedBook] = useState(null);


  React.useEffect(() => {
    let timerId;

    if (searchTerm !== '') {
      timerId = setTimeout(() => {
        fetchBooks();
      }, 1000); // Add a delay of 1 second (1000 milliseconds)
    }

    return () => clearTimeout(timerId); // Clear the timer on unmount or when searchTerm changes
  }, [searchTerm]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://openlibrary.org/search.json?title=${searchTerm}`);
      setBooks(response.data.docs.slice(0, 100));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchBooks();
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };

  const handlePaginationChange = (event) => {
    setBooksPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleDisplayModeChange = (event) => {
    setDisplayMode(event.target.value);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const renderBooks = () => {
    if (displayMode === 'list') {
      return (
        <ul>
          {currentBooks.map((book) => (
            <li key={book.key} onClick={() => handleBookClick(book)}>
              <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt={book.title} />
              <div>
                <h3>{book.title}</h3>
                <p>{book.author_name.join(', ')}</p>
                <p>{book.first_publish_year}</p>
                <p>{book.isbn ? book.isbn[0] : ''}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className="grid">
          {currentBooks.map((book) => (
            <div key={book.key} className="grid-item" onClick={() => handleBookClick(book)}>
              <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author_name.join(', ')}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      <div>
        <label>
          Results per page:
          <select value={booksPerPage} onChange={handlePaginationChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>

        <label>
          Display mode:
          <select value={displayMode} onChange={handleDisplayModeChange}>
            <option value="grid">Grid</option>
            <option value="list">List</option>
        </select>
      </label>
    </div>

    {renderBooks()}

    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <span key={pageNumber} className={currentPage === pageNumber ? 'active' : ''} onClick={() => setCurrentPage(pageNumber)}>
          {pageNumber}
        </span>
      ))}
    </div>

    {selectedBook && (
      <div className="modal" onClick={handleModalClose}>
        <img src={`http://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`} alt={selectedBook.title} />
      </div>
    )}
  </div>
  );
};

export default OpenLibrary;