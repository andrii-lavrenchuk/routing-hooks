import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeading from '../Components/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

const BooksDetailView = () => {
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];

  const [book, setBook] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    bookShelfAPI.getBookById(bookId).then(setBook);
  }, [bookId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/books');
  };
  return (
    <>
      <PageHeading text={`Book ${bookId}`} />
      {book && (
        <>
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
          <hr />
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
