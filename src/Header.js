import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAccessibility = () => {
    setAccessibilityOpen(!accessibilityOpen);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <header>
      <div className="header-content">
        <div className="titles">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              alt="Home Infierno Escarlata"
              className="logo"
            />
          </a>
        </div>

        <div className="accessibility-container">
          <div className="accessibility-toggle" onClick={toggleAccessibility}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icono-accesibilidad.png`}
              alt="icono accesibilidad"
            />
            <span>Accesibilidad</span>
            <img
              src={`${process.env.PUBLIC_URL}/img/${
                accessibilityOpen ? "flecha-arriba.png" : "flecha-abajo.png"
              }`}
              alt="Accesibilidad"
            />
          </div>
          {accessibilityOpen && (
            <div className="accessibility-content show">
              <h4>Tamaño de letra</h4>
              <button onClick={decreaseFontSize}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icono-menos.png`}
                  alt="Disminuir tamaño"
                />
              </button>
              <button onClick={increaseFontSize}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icono-mas.png`}
                  alt="Aumentar tamaño"
                />
              </button>
              <button onClick={resetFontSize}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icono-actualiza.png`}
                  alt="Restablecer tamaño"
                />
              </button>
            </div>
          )}
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/img/${
              menuOpen ? "menu-toggle2.png" : "menu-toggle.png"
            }`}
            alt="Menu Toggle"
          />
        </div>
        {menuOpen && (
          <div className="menu-content">
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/prologo">Prólogo</a>
            </div>
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/capitulo1">Capítulo 1: Sombras entre ruinas</a>
            </div>
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/capitulo2">Capítulo 2: Enigmas en la oscuridad</a>
            </div>
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/capitulo3">Capítulo 3: Sombras del Pasado</a>
            </div>
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/capitulo4">Capítulo 4: Secretos en el Aire</a>
            </div>
            <div className="menu-item" onClick={() => setMenuOpen(false)}>
              <a href="/capitulo4">Capítulo 5: Título</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
