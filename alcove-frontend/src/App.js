import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer'
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenreForm from './components/GenreForm';



function App() {
  return (
    <div className="App">
      <NavBar />
      <h3>Add Genre</h3>
      <GenreForm />
      <GenresContainer />
    </div>
  );
}

export default App;
