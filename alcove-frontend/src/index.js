import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenresContainer from './containers/GenresContainer';
import BooksContainer from './containers/BooksContainer';
import NavBar from './components/NavBar';
import GenreBooksContainer from './containers/GenreBooksContainer'




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
     <NavBar />
    <Router>
      <>
      <Route exact path="/" component={App} />
      <Route exact path="/genres" component={GenresContainer} />
      <Route exact path="/books" component={BooksContainer} />
      <Route path="/genres/:id" component={GenreBooksContainer} />
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
