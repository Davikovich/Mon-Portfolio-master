import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Competences from "./pages/Competences";
import Footer from "./components/Footer";
import "./styles/main.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
