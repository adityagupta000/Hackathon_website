import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './pages/Footer.jsx';
import Home from './components/Home';
import Login from './pages/Login';
import About from './pages/About.js'
import Register from './pages/Register.jsx';
import Event from './components/Event.js'; 

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} /> 
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const noFooterPaths = ['/login', '/register','/about']; 
  if (noFooterPaths.includes(location.pathname)) {
    return null;
  }
  return <Footer/>;
}
export default App;