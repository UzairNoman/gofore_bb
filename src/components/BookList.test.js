import React from "react";
// import { shallow } from "enzyme";
import BookList from "./BookList";
import { render, screen} from '@testing-library/react';
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
    render(<BookList books={books} onThumbnailClick={handleBookClick} />);
  });

  it("renders a list of books", () => {
    render(<BookList books={books} onThumbnailClick={handleBookClick} />);
    const bookItems = screen.getAllByTestId('book-item');
    expect(bookItems).toHaveLength(2);
  });
});