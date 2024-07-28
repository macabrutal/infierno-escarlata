import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { src: `${process.env.PUBLIC_URL}/img/cap1.1.png`, alt: "Slide 1" },
  { src: `${process.env.PUBLIC_URL}/img/cap1.2.png`, alt: "Slide 2" },
  { src: `${process.env.PUBLIC_URL}/img/cap1.3.png`, alt: "Slide 3" },
  { src: `${process.env.PUBLIC_URL}/img/cap1.5.png`, alt: "Slide 4" },
  { src: `${process.env.PUBLIC_URL}/img/cap1.6.png`, alt: "Slide 5" },
];

const Capitulo1 = () => {
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
    navigate("/capitulo2");
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
        <h4 className="subtitulo">CAPÍTULO 1</h4>
        <h1 className="subtitulo">Sombras entre ruinas</h1>
        <h3 className="subtitulo">
          Herramientas IA: Chat GPT | Midjourney | Suno
        </h3>
        <p>
          El silencio era absoluto. El bosque denso rodeaba la zona, formando un
          techo que apenas dejaba penetrar la luz del sol. Una pequeña apertura
          permitía ver las estructuras, ya deterioradas, de lo que antes fuera
          un aeropuerto. En medio de ese lugar, casi olvidado, se encontraba una
          misteriosa ruina cubierta de vegetación.
        </p>

        <p>
          En el interior de la ruina estaba Miguel, un hombre alto, de tez
          morena y ojos oscuros. Era la cabeza de la expedición. Llevaba días
          investigando el misterio de las aeronaves que se habían perdido en
          esas tierras, nunca más volviendo a ver la luz del día. La expedición
          comenzó con una sospecha y un rumor. La expedición había escuchado los
          rumores de los habitantes de la zona, los cuales aseguraban haber
          visto algunas veces aeronaves donde debería haber sólo el silencio de
          la jungla. Pero, hasta ahora, no habían tenido éxito en encontrar nada
          concreto.
        </p>

        <p>
          Miguel estaba cansado de estar dando vueltas en círculos sin avances.
          "¡Maldita sea! ¡Esto es un suplicio!", exclamó Miguel, frustrado.
          "Debemos haber estado dando vueltas en círculos durante días sin
          hallar nada concreto sobre lo que ocurrió aquí". La tripulación había
          buscado durante horas, excavando y rastreando la zona, pero no había
          nada que sugiriera la presencia de una aeronave.
        </p>

        <p>
          Miguel se detuvo frente a la ruina y contempló la vegetación que la
          cubría. "¿Podría estar ahí?", pensó. "¿Habrá algo enterrado ahí que
          explique estos rumores?". Miguel ordenó a la tripulación que empezaran
          a cortar la vegetación y se dispuso a explorar el interior de la
          ruina. La energía del lugar era pesada y tétrica. El olor de la madera
          podrida y la maleza en estado de putrefacción era casi nauseabundo.
          Miguel avanzó lentamente, sus pasos retumbaban en los suelos de
          concreto deteriorados. De repente, el sonido de un metal contra piedra
          rompió el silencio.
        </p>

        <p>
          Miguel corrió hacia el lugar donde había sonado el metal contra
          piedra. Uno de sus compañeros había encontrado una abertura oculta en
          una de las paredes de la ruina. El compañero levantó la mirada hacia
          Miguel. "Parece una puerta oculta, señor. Parece que lleva a algún
          tipo de búnker o almacén". Miguel asintió, contemplando la abertura.
          Había una diminuta escalera de concreto que conducía hacia abajo,
          hacia lo desconocido. "¡Abramos esta puerta y vamos a ver qué tenemos
          aquí!", dijo Miguel, ordenando a la tripulación que comenzaran a
          quitar la vegetación que cubría la entrada.
        </p>

        <p>
          Una tarea lenta y ardua, pero al cabo de un par de horas lograron
          despejar la entrada. Miguel se acercó y colocó su linterna en la
          abertura, proyectando un haz de luz por lo oscuro que había más allá.
          "¿Lo ves?", preguntó su compañero. "¿Qué crees que podría haber ahí
          dentro?". "No lo sé", respondió Miguel, mirando a su compañero. "Pero
          tenemos que descubrirlo. Vamos, dejemos nuestras cosas aquí. Solo
          llevaremos las linternas y nuestras armas". Miguel comenzó a bajar por
          la escalera, con su compañero detrás. Cada escalón que recorrían, el
          aire se hacía más tétrico y el miedo comenzaba a aumentar.
        </p>

        <p>
          Al llegar a la base de la escalera, Miguel y su compañero fueron
          recibidos por una puerta de acero corredera, como si fuera de algún
          tipo de almacén. Miguel intentó empujar la puerta, pero estaba
          atascada. "¡Maldita sea!", exclamó en voz baja, y después apuntó su
          arma a la cerradura y disparó. El estruendo del disparo resonó por el
          espacio estrecho. En respuesta a ello, unos fragmentos de metralla
          volaron en todas direcciones, y la puerta se abrió lentamente,
          haciendo un ruido metálico.
        </p>

        <p>
          Miguel y su compañero entraron lentamente al lugar, apuntando con sus
          armas. Su linterna iluminaba un estrecho pasillo húmedo, cubierto de
          moho y telarañas. Los dos avanzaron por el pasillo, intentando no
          tocar nada. Su sangre golpeaba en sus oídos. A medida que se
          adentraban más, los estrechos confines parecían aferrarse a ellos.
          Llegaron a lo que parecía una habitación. Todo estaba cubierto de
          polvo, pero unas pocas cajas de metal aún se veían como nuevas.
        </p>

        <p>
          Miguel se aproximó a una de las cajas y la abrió, vaciando su
          contenido. Dentro había pilas y pilas de papeles y fotos, amarillentos
          por la edad. "¿Qué carajo es esto?", preguntó en voz baja, enfrentando
          un montón de papeles. Una foto en particular llamó su atención. La
          foto mostraba a un hombre en uniforme militar que sujetaba un pedazo
          de metal que tenía forma de una aeronave, pero con algo extraño. ¿Era
          ese una especie de propulsor desconocido?
        </p>

        <p>
          Miguel observó la foto un momento más, y luego la agarró y se la
          mostró a su compañero. "Este es el lugar". Sin ninguna advertencia, un
          sonido gutural comenzó a hacerse presente. Se volvieron rápidamente y
          sus linternas iluminaron una figura que estaba detrás de ellos.
        </p>

        <p>
          Una mujer de aspecto decidido emergió de las sombras, con la ropa
          desgarrada por las ramas y el barro cubriendo su piel. Era alta, de
          cabello castaño y ojos penetrantes. "¿Quién eres?", preguntó Miguel,
          sorprendido.
        </p>

        <p>
          "Soy Julieta, exploradora de la expedición", respondió ella. "He
          estado siguiéndolos desde el campamento. Parece que encontraron algo
          interesante aquí".
        </p>

        <p>
          "Julieta", repitió Miguel, recordando las historias de su valentía y
          destreza en sobrevivir en entornos hostiles. "¿Qué te trae aquí?"
        </p>

        <p>
          "He oído los rumores y vine a investigar", dijo Julieta, observando la
          foto en las manos de Miguel. "Eso parece importante. Deberíamos unir
          fuerzas para descubrir qué está pasando realmente aquí".
        </p>

        <p>
          La incorporación de Julieta fortaleció la expedición, añadiendo su
          valentía y habilidades únicas al equipo. Juntos, enfrentaron la
          amenaza que acechaba en las sombras, decididos a desentrañar los
          misterios ocultos en las ruinas.
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
            <h1>Versión musical Capítulo 1</h1>
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

export default Capitulo1;
