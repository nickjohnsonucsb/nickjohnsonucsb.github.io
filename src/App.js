import React from 'react';

import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Spotify from './pages/Spotify';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path='/utune' exact={true} element={<Spotify />} />
        

      </Routes>
    </Router>
  )
}

export default App;