import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { src: `${process.env.PUBLIC_URL}/img/cap2.1.png`, alt: "Slide 1" },
  { src: `${process.env.PUBLIC_URL}/img/cap2.2.png`, alt: "Slide 2" },
  { src: `${process.env.PUBLIC_URL}/img/cap2.3.png`, alt: "Slide 3" },
  { src: `${process.env.PUBLIC_URL}/img/cap2.4.png`, alt: "Slide 4" },
];

const Capitulo2 = () => {
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
    navigate("/capitulo3");
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
        <h4 className="subtitulo">CAPÍTULO 2</h4>
        <h1 className="subtitulo">Enigmas en la oscuridad</h1>
        <h3 className="subtitulo">
          Herramientas IA: Chat GPT (Gpt4-o) | Midjourney
        </h3>
        <p>
          Miguel, Julieta y el resto del equipo exploraban con cautela el oscuro
          pasillo, intentando descifrar los misterios que albergaban las ruinas.
          Las linternas titilaban en la oscuridad, creando sombras inquietantes
          que se movían con cada paso.
        </p>

        <p>
          "Debemos ser cuidadosos", murmuró Julieta, observando atentamente las
          paredes cubiertas de moho. "Este lugar no parece haber sido abandonado
          por completo".
        </p>

        <p>
          De pronto, un ruido sordo resonó detrás de ellos. El equipo se volteó
          rápidamente, armas en mano, apuntando hacia la oscuridad. Una figura
          encapuchada salió de las sombras; sus movimientos eran fluidos y
          sigilosos.
        </p>

        <p>
          "¿Quién diablos eres?", exigió Miguel, enfocando su linterna al
          desconocido.
        </p>

        <p>
          La figura levantó una mano en señal de paz y con la otra se quitó la
          capucha, revelando un rostro lleno de cicatrices. Era un hombre de
          mediana edad con ojos penetrantes que parecían ver más allá de la
          superficie.
        </p>

        <p>
          "Mi nombre es Marco", comenzó el hombre en un tono calmado pero firme.
          "He estado observándolos desde que llegaron a este lugar. Llevan días
          aquí sin saber en lo que se han metido. Yo, en cambio, sé exactamente
          qué es lo que buscan".
        </p>

        <p>
          El equipo intercambió miradas escépticas, pero Miguel sintió una
          chispa de curiosidad en su interior.
        </p>

        <p>"¿Qué quieres decir con eso?", preguntó sin bajar la guardia.</p>

        <p>
          Marco caminó lentamente hacia ellos, mostrando con las manos que no
          estaba armado. "Estos no son sólo restos de un aeropuerto. Hay un
          secreto aquí, un proyecto del que pocos sabemos. Y necesito su ayuda
          para revelar la verdad porque estoy seguro de que no saldremos de aquí
          vivos si no lo hacemos juntos".
        </p>

        <p>
          Miguel bajó lentamente el arma, aunque seguía siendo cauteloso. El
          resto del equipo no apartaba la vista de Marco, listos para actuar si
          era necesario.
        </p>

        <p>
          "Si realmente sabes lo que ocurre aquí, será mejor que empieces a
          hablar", dijo Miguel sin perder la firmeza en su voz.
        </p>

        <p>
          Marco asintió y empezó su relato; sus ojos parecían profundizar en sus
          recuerdos. "Hace años, este lugar fue más que un simple aeropuerto.
          Fue una tapadera para experimentos militares. Se realizaron pruebas
          con una tecnología que podría cambiar el curso de la historia.
          Aeronaves avanzadas, propulsores experimentales… pero algo salió muy
          mal. Algo que nadie podía prever".
        </p>

        <p>
          Julieta se acercó, su curiosidad era evidente. "¿Y cómo sabes todo
          esto?"
        </p>

        <p>
          Marco sonrió amargamente. "Yo era parte de ese proyecto, un científico
          que escapó cuando las cosas comenzaron a salirse de control. Esos
          documentos que encontraron… son sólo la punta del iceberg. Y hay algo
          más aquí, algo que todavía está activo".
        </p>

        <p>
          Miguel dio un paso adelante. "Entonces, ¿por qué ayudarnos ahora?"
        </p>

        <p>
          El rostro de Marco se endureció. "Porque hay cosas debajo de estas
          ruinas que nunca debieron ser desenterradas. Y si no las detenemos,
          corremos el riesgo de liberar algo que no podemos controlar".
        </p>

        <p>
          Un silencio pesado cayó sobre el grupo. Miguel finalmente rompió el
          silencio. "Necesitamos un plan. Julieta, tú eres la experta en
          tecnología. ¿Qué sugieres?"
        </p>

        <p>
          Julieta, conocida por su valentía y destreza en sobrevivir en entornos
          hostiles, además de su conocimiento en tecnología, respondió
          rápidamente. "Podemos usar los datos de los documentos para
          identificar las áreas críticas. Si logramos acceder a los sistemas
          antiguos, podríamos encontrar una forma de neutralizar las amenazas."
        </p>

        <p>
          Marco asintió. "Exactamente. Pero debemos movernos rápido. No estamos
          solos aquí."
        </p>

        <p>
          Julieta lideró al equipo hacia una sala de control abandonada, sus
          dedos volaban sobre los teclados polvorientos mientras buscaba
          información. La tensión crecía a medida que pequeños ruidos y sombras
          sugerían que no estaban solos.
        </p>

        <p>
          "Lo tengo", dijo finalmente Julieta, su voz firme pero urgente. "Hay
          un núcleo de energía en las profundidades del complejo. Si logramos
          desactivarlo, podríamos detener lo que sea que esté despertando."
        </p>

        <p>
          Miguel tomó una decisión rápida. "Vamos. No hay tiempo que perder."
        </p>

        <p>
          El equipo se adentró aún más en las ruinas, conscientes de que cada
          paso los acercaba más a un peligro desconocido. En la oscuridad, la
          verdadera naturaleza del "Infierno Escarlata" comenzaba a revelarse.
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
            <h1>Versión musical Capítulo 2</h1>
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

export default Capitulo2;
