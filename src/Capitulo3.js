import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { src: `${process.env.PUBLIC_URL}/img/img3.png`, alt: "Slide 1" },
  { src: `${process.env.PUBLIC_URL}/img/cap.3-img2.webp`, alt: "Slide 2" },
  { src: `${process.env.PUBLIC_URL}/img/cap.3-img3.webp`, alt: "Slide 3" },
  { src: `${process.env.PUBLIC_URL}/img/cap.3-img4.webp`, alt: "Slide 4" },
  { src: `${process.env.PUBLIC_URL}/img/cap.3-img5.png`, alt: "Slide 5" },
  { src: `${process.env.PUBLIC_URL}/img/img1.png`, alt: "Slide 6" },
];

const Capitulo3 = () => {
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
    navigate("/capitulo4");
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
        <h4 className="subtitulo">CAPÍTULO 3</h4>
        <h1 className="subtitulo">Sombras del Pasado</h1>

        <h3 className="subtitulo">
          Herramientas IA: Chat GPT4 (Gpt Libro del Club de la IA) | Midjourney
          | Suno
        </h3>
        <p>
          Julieta avanzaba con cautela, su linterna iluminando las paredes
          cubiertas de moho del complejo. Miguel, Gracia y Wilson la seguían de
          cerca, sus rostros tensos reflejaban la seriedad de la situación. El
          núcleo de energía que Julieta había mencionado estaba más cerca, pero
          el camino se tornaba cada vez más peligroso.
        </p>
        <p>
          "Debemos movernos rápido", murmuró Miguel, "No sabemos cuánto tiempo
          tenemos antes de que esto se salga de control."
        </p>
        <p>
          Julieta asintió, sus ojos recorriendo el entorno en busca de cualquier
          pista. "Este lugar tiene algo más, algo que no he podido identificar
          todavía", dijo en voz baja. "Parece que la energía aquí no es solo
          eléctrica, hay algo más, algo antiguo."
        </p>
        <p>
          De repente, un ruido sordo resonó a la distancia. Gracia levantó su
          arma, su postura lista para el combate. "¿Qué fue eso?" preguntó, sus
          ojos escaneando las sombras.
        </p>
        <p>
          Wilson se preparó rápidamente para pelear, sus músculos tensándose
          mientras empuñaba su arma. Gracia, al verlo, comentó: "Viejo es el
          viento… y sigue soplando". Wilson le lanzó una mirada y respondió:
          "Alita quebrada."
        </p>
        <p>
          "¡Shhh!" Julieta levantó la mano, señalando silencio. Un susurro suave
          llenó el aire, como voces lejanas. "Hay algo o alguien aquí."
        </p>
        <p>
          Se acercaron a una gran puerta metálica oxidada. Julieta comenzó a
          trabajar en el panel de control al lado de la puerta, sus dedos
          moviéndose rápidamente sobre los teclados polvorientos. "Si puedo
          hackear esto, podremos acceder a la sala principal."
        </p>
        <p>
          Mientras esperaban, Miguel se volvió hacia Wilson y Gracia. "¿Han oído
          hablar de los secretos de la inteligencia artificial en este lugar?
          Algo que va más allá de lo que conocemos."
        </p>
        <p>
          Wilson asintió. "Sí, hay rumores sobre proyectos antiguos,
          experimentos con IA que nunca fueron completados. Nadie fuera del
          mundo AI conoce a Lecun, pero su trabajo podría estar relacionado con
          esto."
        </p>
        <p>
          Finalmente, la puerta se abrió con un chirrido. "Lo logré", dijo
          Julieta, sonriendo. "Vamos."
        </p>
        <p>
          Entraron en una vasta sala llena de equipos tecnológicos antiguos y
          maquinaria desconocida. En el centro, un brillante núcleo de energía
          pulsaba con una luz roja intensa.
        </p>
        <p>
          "Si logramos desactivarlo, podríamos detener lo que sea que esté
          despertando", dijo Julieta, acercándose al núcleo con cuidado. Comenzó
          a examinar los controles, sus conocimientos tecnológicos en pleno
          despliegue.
        </p>
        <p>
          De repente, una figura emergió de las sombras, revelando a un hombre
          mayor con ojos brillantes. "Espero que llegue Wilson por acá", dijo el
          hombre, su voz resonando en el silencio.
        </p>
        <p>
          "Se está llenando el barrio", murmuró Gracia, levantando su arma.
          "¿Quién eres tú?"
        </p>
        <p>
          El hombre levantó las manos en señal de paz. "Soy un sobreviviente, un
          antiguo científico de este lugar. He estado escondido, observando,
          esperando a que alguien venga a detener esto. Como dijo Alan J.
          Perlis, 'El mejor método de depuración es eliminar y rezar'."
        </p>
        <p>
          Julieta no apartó la vista del núcleo. "Necesitamos tu ayuda. Este
          núcleo está protegido por un sistema antiguo. ¿Puedes desactivarlo?"
        </p>
        <p>
          El científico asintió y se acercó. "Trabajemos juntos. La vida sin
          Internet es como un avión sin alas, pero con nuestro conocimiento
          combinado, podemos hacer esto."
        </p>
        <p>
          Finalmente, el núcleo comenzó a apagarse, su luz roja disminuyendo.
          "Lo logramos", dijo Julieta, sus ojos brillando de alivio.
        </p>
        <p>
          Pero antes de que pudieran celebrar, un estruendo sacudió el complejo.
          "Esto no ha terminado", dijo Miguel, mirando a su alrededor con
          preocupación. "El verdadero misterio apenas comienza."
        </p>
        <p>
          De repente, una de las paredes laterales se deslizó, revelando un
          pasaje oculto. La luz de sus linternas iluminó un vasto hangar
          subterráneo, y en el centro del mismo, descansaba un antiguo Boeing
          747, cubierto de polvo y redes metálicas.
        </p>
        <p>
          "Un avión", murmuró Gracia, sorprendida. "¿Qué hace un avión aquí
          abajo?"
        </p>
        <p>
          El científico los guió hacia el coloso de metal y les dijo: "Les daré
          un resumen resumido; este avión fue parte de los experimentos que
          mencioné. Se suponía que transportaría la tecnología que
          desarrollábamos aquí, pero algo salió mal y fue enterrado junto con el
          resto del complejo."
        </p>
        <p>
          Julieta observó el avión con fascinación. "Si logramos acceder a su
          sistema de vuelo, podríamos descubrir más sobre lo que realmente
          sucedió aquí."
        </p>
        <p>
          El equipo subió al avión, sus linternas revelando el interior
          destartalado y lleno de equipos antiguos. "Esto no se ve todos los
          días", comentó Wilson, tratando de aligerar la atmósfera. "Nadie fuera
          del mundo AI conoce a Lecun, pero él estaría impresionado."
        </p>
        <p>
          Mientras exploraban el interior, encontraron documentos y dispositivos
          que podrían contener las respuestas a los misterios del "Infierno
          Escarlata". La tensión y el suspense aumentaban, pero también la
          determinación de cada miembro del equipo.
        </p>
        <p>
          Miguel se volvió hacia Julieta y el científico. "Tenemos trabajo por
          hacer. Esto es solo el comienzo."
        </p>
        <p>
          El equipo se preparó para lo que vendría, conscientes de que habían
          dado un paso crucial, pero el "Infierno Escarlata" aún guardaba muchos
          secretos oscuros.
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
            <h1>Versión musical Capítulo 3</h1>
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

export default Capitulo3;
