import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Prologo from "./Prologo";
import Capitulo1 from "./Capitulo1";
import Capitulo2 from "./Capitulo2";
import Capitulo3 from "./Capitulo3";
import Capitulo4 from "./Capitulo4";
import Capitulo5 from "./Capitulo5";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/prologo" element={<Prologo />} />
          <Route path="/capitulo1" element={<Capitulo1 />} />
          <Route path="/capitulo2" element={<Capitulo2 />} />
          <Route path="/capitulo3" element={<Capitulo3 />} />
          <Route path="/capitulo4" element={<Capitulo4 />} />
          <Route path="/capitulo5" element={<Capitulo5 />} />
        </Routes>
      </div>
      <footer>2024 | El Club de la IA ✨</footer>
    </div>
  );
};

export default App;
