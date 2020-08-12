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
      <h4>Add New Genre</h4>
      <GenreForm />
      <GenresContainer />
    </div>
  );
}

export default App;
