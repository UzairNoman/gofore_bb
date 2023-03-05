import React from "react";
import { render, screen, fireEvent  } from '@testing-library/react';
import BookThumbnail from "./BookThumbnail";
describe("BookList", () => {
    const books = [
      {
        key: '1',
        title: "Book 1",
        author: "Author 1",
        year: 2020,
        isbn: ["1234567890"]
      },
      {
        key: '2',
        title: "Book 2",
        author: "Author 2",
        year: 2019,
        isbn: ["0987654321"]
      }
    ];
    const handleBookClick = jest.fn();
    it("renders without crashing", () => {
      render(<BookThumbnail
        title={books[0].title}
        author={books[0].author_name}
        coverId={books[0].cover_i}
        handleClick={() => handleBookClick(books[0])}
        />);
    });
  
  
      test('calls onThumbnailClick when book thumbnail is clicked', () => {
      const handleThumbnailClick = jest.fn();
      render(<BookThumbnail
        title={books[0].title}
        author={books[0].author_name}
        coverId={books[0].cover_i}
        handleClick={() => handleThumbnailClick(books[0])}
        />);
        const bookThumbnail = screen.getAllByTestId('book-thumbnail')[0];
        fireEvent.click(bookThumbnail);
        expect(handleThumbnailClick).toHaveBeenCalledTimes(1);
        });
  });