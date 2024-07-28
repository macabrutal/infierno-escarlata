import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { src: `${process.env.PUBLIC_URL}/img/cap4.1.png`, alt: "Slide 1" },
  { src: `${process.env.PUBLIC_URL}/img/cap4.2.png`, alt: "Slide 2" },
  { src: `${process.env.PUBLIC_URL}/img/cap4.3.png`, alt: "Slide 3" },
  { src: `${process.env.PUBLIC_URL}/img/cap4.4.png`, alt: "Slide 4" },
  { src: `${process.env.PUBLIC_URL}/img/cap4.5.png`, alt: "Slide 5" },
  { src: `${process.env.PUBLIC_URL}/img/cap4.6.png`, alt: "Slide 6" },
];

const Capitulo5 = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia slide cada 3 segundos

    return () => clearInterval(slideInterval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  const goToNextChapter = () => {
    navigate("/capitulo5");
  };

  return (
    <div className="prologue">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {index === currentSlide && <img src={image.src} alt={image.alt} />}
          </div>
        ))}
      </div>
      <div className="navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>

      <div className="textContainer">
        <h4 className="subtitulo">CAPÍTULO 5</h4>
        <h1 className="subtitulo">Título</h1>
        <h3 className="subtitulo">
          Herramientas IA: Chat GPT | Ideogram | deepswapper
        </h3>
        <p>Contenido CAPÍTULO 5</p>
        <p>.....................</p>
        <p>.....................</p>
        <p>.....................</p>
        <p>.....................</p>
        <p>.....................</p>

        <p>.....................</p>

        <div className="button-content">
          <button className="modal-button" onClick={toggleModal}>
            Ver su versión musical
          </button>

          <button className="next-button" onClick={goToNextChapter}>
            Ver siguiente Capítulo
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h1>Versión musical Capítulo 4</h1>
            <h2>Herramienta IA: Suno</h2>
            <video controls>
              <source
                src={`${process.env.PUBLIC_URL}/img/cap1-Sombras-entre-ruinas.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div class="ellipsis z-10"></div>
            <div class="ellipsis2 z-10"></div>

            <button className="close-button" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Capitulo5;
