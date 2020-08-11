import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GenresContainer from './containers/GenresContainer';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <GenresContainer />
    </div>
  );
}

export default App;
