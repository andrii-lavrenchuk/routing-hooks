import { useParams, Link, useLocation } from 'react-router-dom';
import makeSlug from '../slug/makeSlug';

const AuthorSubView = ({ authors }) => {
  const { slug } = useParams();
  const authorId = slug.match(/[a-z0-9]+$/)[0];
  const id = Number(authorId);
  const location = useLocation();
  const author = authors.find(author => id === author.id);

  return (
    <>
      <h2>{author.name}</h2>
      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${makeSlug(`${book.title} ${book.id}`)}`,
                state: { from: location },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorSubView;
