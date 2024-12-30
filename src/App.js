import React from "react";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
