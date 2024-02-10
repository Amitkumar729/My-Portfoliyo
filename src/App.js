import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Frontpage from "./pages/frontPage/Frontpage";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <>
      <Router>
       
      {/* <Navbar/>*/}
        
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
