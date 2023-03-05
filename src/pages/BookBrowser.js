
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BookBrowser.css";
import BookGrid from "../components/BookGrid";
import BookList from "../components/BookList";
import Modal from "../shared/Modal";
import Pagination from "../components/Pagination";

function BookBrowser() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("prisoner");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(100);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedBook, setSelectedBook] = useState(null);
  const apiUrl = `http://openlibrary.org/search.json?title=${searchTerm}`;

  useEffect(() => {
    searchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchBooks = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(apiUrl);
      setBooks(result.data.docs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      searchBooks();
    }
  }

  const handlePageCountChange = (event) => {
    setBooksPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };
  
  const handleViewModeChange = (e) => {
    setViewMode(e.target.value);
  };

  const handleBookClick = (book) => {
    const bookUrl = book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : '/no-image.jpg';  
    setSelectedBook(bookUrl);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="search-container">
        <input type="text" placeholder="Search books..." value={searchTerm} onChange={handleSearch} onKeyDown={handleKeyDown} />
        <button type="button" onClick={searchBooks}>
          Search
        </button>
      </div>

      <div className="view-mode-container">
        <label htmlFor="view-mode">View Mode:</label>
        <select id="view-mode" value={viewMode} onChange={handleViewModeChange}>
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
        <label>
          Results per page:
          <select value={booksPerPage} onChange={handlePageCountChange}>
            <option value="100">Select any</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : books.length > 0 ? (
        viewMode === "grid" ? (
          <>
            <BookGrid books={currentBooks} onThumbnailClick={handleBookClick} />
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={books.length}
              activePage={currentPage}
              paginate={paginate}
            />
          </>
        ) : (
          <>
            <BookList books={currentBooks} onThumbnailClick={handleBookClick} />
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={books.length}
              activePage={currentPage}
              paginate={paginate}
            />
          </>
        )
      ) : (
        <div className="no-results">No results found.</div>
      )}

      {selectedBook && <Modal show="true" imageUrl={selectedBook} onClose={handleModalClose} />}
    </div>
  );
}

export default BookBrowser;