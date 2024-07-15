import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Maincontent';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <p>난 병신이다</p>
    </div>
  );
}

export default App;
