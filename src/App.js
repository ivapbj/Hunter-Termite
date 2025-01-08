import React from "react";

import HeroSection from "./pages/HeroSection";

import Footer from "./pages/Footer";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main style={{ flex: 1 }}>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
