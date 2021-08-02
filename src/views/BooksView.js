import { useState, useEffect } from 'react';
import makeSlug from '../slug/makeSlug';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../Components/PageHeading';

const BooksView = () => {
  const [books, setBooks] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();

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
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: { from: location },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BooksView;
