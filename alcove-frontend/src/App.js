import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BooksContainer from './containers/BooksContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenresContainer from './containers/GenresContainer';
import NavBar from './components/NavBar';
import GenreBooksContainer from './containers/GenreBooksContainer';
import BookForm from './components/BookForm';
import { connect } from 'react-redux';
import { addBook } from './actions/books';
import { getGenres } from './actions/genres'
import { getBooks } from './actions/books'
import Home from './components/Home'



class App extends Component {

  componentDidMount() {
    this.props.getGenres()
    this.props.getBooks()
  }


  render(){

    return (
      <div className="App">
        <NavBar />
        <Router>
          <>
          <Route exact path="/" component={Home} />
          <Route exact path="/genres" component={GenresContainer} /> 
          <Route exact path="/books/new" render={(routerProps) => <BookForm addBook={this.props.addBook} genres={this.props.genres} {...routerProps}/>}/>
          <Route path="/genres/:id" component={GenreBooksContainer} />
          </>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
      genres: state.genreReducer.genres
  }
}  

export default connect(mapStateToProps, { addBook, getGenres, getBooks })(App)
