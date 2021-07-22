import { useParams, Link } from 'react-router-dom';

const AuthorSubView = ({ authors }) => {
  const { authorId } = useParams();
  const id = Number(authorId);

  const author = authors.find(author => id === author.id);

  return (
    <>
      <h2>{author.name}</h2>
      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorSubView;
