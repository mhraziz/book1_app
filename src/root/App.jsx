import React from "react";
import Book from "../components/Book";
import MasteringReact from "../assets/images/mastering react.svg";
import PracticalReact from "../assets/images/practical react.svg";
import ReactInAction from "../assets/images/react in action.svg";
import "../styles/style.css";

export const App = () => {
  const books = [
    { title: "Mastering React", author: "Anthony Pham", cover: MasteringReact },
    { title: "Practical React", author: "Alex Johnson", cover: PracticalReact },
    { title: "React in Action", author: "Bob Climo", cover: ReactInAction },
  ];

  const renderedBooks = books.map((book) => {
    return (
      <Book
        key={crypto.randomUUID()}
        title={book.title}
        author={book.author}
        cover={book.cover}
      />
    );
  });

  return (
    <main>
      <h1>Favorite Books</h1>
      <div className="book-list">{renderedBooks}</div>
    </main>
  );
};

export default App;
