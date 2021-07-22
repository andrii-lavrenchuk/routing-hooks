import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeading from '../Components/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

const BooksDetailView = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.getBookById(bookId).then(setBook);
  }, [bookId]);
  return (
    <>
      <PageHeading text={`Book ${bookId}`} />
      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Author: {book.author.name}</p>
          <p>Description: {book.descr}</p>
        </>
      )}
    </>
  );
};

export default BooksDetailView;
