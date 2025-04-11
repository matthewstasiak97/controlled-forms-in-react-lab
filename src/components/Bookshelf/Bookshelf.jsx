import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the witch, and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);

    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((books, index) => (
            <div key={index} className="book-card">
              <h3>{books.title}</h3>
              <p>by {books.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
