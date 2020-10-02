import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages/home'
import { CosmosPage } from './pages/cosmos'

function App() {
  return (
    <div className="App">
      <HomePage />
      <CosmosPage />
    </div>
  );
}

export default App;
