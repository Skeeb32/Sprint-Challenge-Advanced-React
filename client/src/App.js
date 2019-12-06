import React from 'react';
import DataFetch from './components/DataFetch';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetch />
    </div>
  );
}

export default App;