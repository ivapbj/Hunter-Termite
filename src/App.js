import React from "react";
import HeroSection from "./pages/HeroSection";
import Footer from "./pages/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* HeroSection */}
      <HeroSection />

      <Footer />
    </div>
  );
};

export default App;
