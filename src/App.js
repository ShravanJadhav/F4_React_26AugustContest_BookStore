import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks('harry+potter');
    fetchBooks('sherlock+holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(prevBooks => [...prevBooks, ...data.items]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Online Bookstore</h1>
        <SearchBar fetchBooks={fetchBooks} />
      </header>
      <BookList books={books} />
    </div>
  );
}

export default App;
