import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import AuthorsView from './views/AuthorsView';
import BooksDetailView from './views/BooksDetailView';
import BooksView from './views/BooksView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:slug">
          <BooksDetailView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
