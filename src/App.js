import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import SocialFollow from "./SocialFollow";
import Home from './pages';

function App() {
  return (
    <Router>
     <Home />
     <SocialFollow/>
    </Router>
    
  );
}

export default App;
