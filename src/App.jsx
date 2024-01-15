import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage';
import TuringMachinePage from './pages/TuringMachinePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/TuringMachine" element={<TuringMachinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
