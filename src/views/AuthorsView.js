import * as bookShelfAPI from '../services/bookshelf-api';
import { useState, useEffect } from 'react';
import PageHeading from '../Components/PageHeading';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import AuthorSubView from './AuthorSubView';
import makeSlug from '../slug/makeSlug';

const AuthorsView = () => {
  const [authors, setAuthors] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    bookShelfAPI.getAuthors().then(setAuthors);
  }, []);
  return (
    <>
      <PageHeading text="Authors page" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${makeSlug(`${author.name} ${author.id}`)}`}>
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Route path={`${path}/:slug`}>
        {authors && <AuthorSubView authors={authors} />}
      </Route>
    </>
  );
};

export default AuthorsView;
