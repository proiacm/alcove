import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer'
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksContainer from './containers/BooksContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <GenresContainer />
      <BooksContainer />
    </div>
  );
}

export default App;
