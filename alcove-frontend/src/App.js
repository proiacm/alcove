import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer'
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <GenresContainer />
    </div>
  );
}

export default App;
