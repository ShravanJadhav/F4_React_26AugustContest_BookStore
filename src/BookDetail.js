import React from 'react';

function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <p>{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
}

export default BookDetail;
