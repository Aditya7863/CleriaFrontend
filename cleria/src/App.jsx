import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import '@fontsource/inria-sans';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route with Header */}
        <Route
          path="/"
          element={
            <div className="bg-[url('/assets/bg.jpg')] bg-cover bg-center min-h-screen flex flex-col">
              <Header />
              <HeroSection />
            </div>
          }
        />

        {/* About Route without Header */}
        <Route
          path="/about"
          element={
            <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen flex items-center justify-center">
              <About />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
