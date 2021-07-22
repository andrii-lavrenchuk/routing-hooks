import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../Components/PageHeading';

const BooksView = () => {
  const [books, setBooks] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    bookShelfAPI.getBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Books page" />
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BooksView;
