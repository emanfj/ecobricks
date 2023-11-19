import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';


function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/" component={LandingPage} />
        </Routes>
      </Router> */}
      <LandingPage /> 
    </div>
  );
}

export default App;
