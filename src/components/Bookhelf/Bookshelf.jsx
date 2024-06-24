import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    {
      title: "The Way of Kings",
      author: "Brandon Sanderson",
    },
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  function handleInputChange(e) {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBooks([...books, { title: newBook.title, author: newBook.author }]);
    setNewBook({ title: "", author: "" });
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
