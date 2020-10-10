import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScreenAllProducts from './screens/ScreenAllProducts';
import AddNewProduct from './screens/AddNewProduct';
import DataVisual from './screens/DataVisual';


//
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to online
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store
        </a>
      </header>

      <div className="container">
      <AddNewProduct />
      <DataVisual />
      <ScreenAllProducts  />
      </div>
      
    </div>
  );
}

export default App;
