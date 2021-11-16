import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import About from 'view/About';
import Home from 'view/Home';
import NoMatch from 'view/NoMatch';
import User from 'view/User';

function App() {
  return (
    <Routes>
      <Route path="/"element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/user"  element={<User/>} />
      <Route path="*" element={<NoMatch/>} />
    </Routes>
  );
}

export default App;
