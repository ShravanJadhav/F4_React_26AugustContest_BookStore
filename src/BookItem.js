import React, { useState } from 'react';
import BookDetail from './BookDetail';

function BookItem({ book }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="book-item" onClick={toggleExpanded}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      {expanded && <BookDetail book={book} />}
    </div>
  );
}

export default BookItem;
