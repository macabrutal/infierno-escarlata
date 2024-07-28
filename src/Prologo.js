import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { src: `${process.env.PUBLIC_URL}/img/img1.png`, alt: "Slide 1" },
  { src: `${process.env.PUBLIC_URL}/img/img2.png`, alt: "Slide 2" },
  { src: `${process.env.PUBLIC_URL}/img/img3.png`, alt: "Slide 3" },
  { src: `${process.env.PUBLIC_URL}/img/cap1.6.png`, alt: "Slide 4" },
  { src: `${process.env.PUBLIC_URL}/img/cap.3-img5.png`, alt: "Slide 5" },
];

const Prologo = () => {
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
    navigate("/capitulo1");
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
        <h1 className="subtitulo">Prólogo</h1>
        <h3 className="subtitulo">
          Herramientas IA: Chat GPT | Midjourney | Suno
        </h3>
        <p>
          La noche en que el cielo se tiñó de escarlata, el mundo cambió para
          siempre. En un rincón olvidado de la humanidad, donde las ruinas
          susurran historias del pasado, un misterio aguarda ser desenterrado.
          El zumbido de hélices, el rugido de motores antiguos y los susurros de
          almas perdidas aún resuenan en los aviones que jamás debieron volar de
          nuevo.
        </p>
        <p>
          En un paisaje otrora próspero, ahora reclamado por la naturaleza y el
          olvido, algo siniestro acecha. Los aviones, abandonados y devorados
          por el tiempo, parecen atrapados en un vuelo eterno, entre dos mundos.
          Sus fuselajes, envueltos en vegetación y teñidos de un rojo etéreo,
          narran cuentos de valentía, terror y desesperanza.
        </p>
        <p>
          Rumores persistentes hablan de aviones que se desvanecieron en
          tormentas misteriosas, pilotos que volaron hacia lo desconocido y
          nunca regresaron, y un cielo que se abre como una herida hacia otra
          dimensión. La tentación de descubrir estos enigmas ha seducido a
          numerosos buscadores de la verdad, pero ninguno ha vuelto a contarlo.
          Los valientes o insensatos que han tratado de desentrañar el misterio
          del Infierno Escarlata han quedado atrapados en un laberinto de tiempo
          y espacio donde las leyes de la realidad se distorsionan y se rompen.
        </p>
        <p>
          Ahora, una nueva expedición se prepara para adentrarse en el corazón
          de este enigma. Armados con la curiosidad y el deseo de conocimiento,
          se enfrentan a un destino incierto. ¿Serán capaces de descubrir los
          secretos que yacen bajo décadas de silencio y ruina? ¿O sucumbirán al
          embrujo de un misterio que trasciende los límites de la comprensión
          humana?
        </p>
        <p>
          Bienvenido a "Infierno Escarlata", donde el pasado nunca muere y el
          futuro es una sombra teñida de rojo. La verdad está ahí, esperando ser
          descubierta, pero el precio por desvelarla podría ser más alto de lo
          que nadie está dispuesto a pagar.
        </p>

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
            <h1>Versión musical del prólogo</h1>
            <h2>Herramienta IA: Suno</h2>
            <video controls>
              <source
                src={`${process.env.PUBLIC_URL}/img/proplogo-Infierno escarlata.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="ellipsis z-10"></div>
            <div className="ellipsis2 z-10"></div>

            <button className="close-button" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prologo;
