


// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Hero from "./pages/Hero/Hero";
import Services from "./pages/Services/Services";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/About/About";
import Error from "./Error";

function App() {
  return (
    
    <Router >
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/services" element={<Services />} />
     
        <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<Error/>}/>
      </Routes>
     <Footer/> 
     </Router>
    
  );
}

export default App;
