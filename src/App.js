import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.js';
import TourList from './components/TourList'

function App() {
  return (
  <main>
    <Navbar/>
    <TourList></TourList>
  </main>);
}

export default App;
