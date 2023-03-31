import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './features/greetings/Greetings';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
