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

const Capitulo4 = () => {
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
        <h4 className="subtitulo">CAPÍTULO 4</h4>
        <h1 className="subtitulo">Secretos en el Aire</h1>
        <h3 className="subtitulo">
          Herramientas IA: Chat GPT | Ideogram | deepswapper
        </h3>
        <p>
          El Boeing 747 se alzaba ante ellos como un gigante dormido, su
          fuselaje cubierto de una fina capa de óxido y vegetación. Julieta fue
          la primera en subir por la escalerilla improvisada, seguida de cerca
          por Miguel, Gracia, Wilson y el científico, al que ahora conocían como
          Dr. Ramírez. El interior del avión era un laberinto de cables
          expuestos, paneles oxidados y equipos antiguos cubiertos de polvo.
        </p>
        <p>
          "Cuidado dónde pisan", advirtió Julieta, su linterna iluminando el
          suelo inestable. "La estructura parece frágil en algunas áreas."
        </p>
        <p>
          Miguel asintió, sus ojos escaneando el entorno. "Manténganse alerta.
          No sabemos qué podemos encontrar aquí."
        </p>
        <p>
          Avanzaron con cautela por el pasillo principal, el sonido de sus pasos
          resonando en el silencio sepulcral del avión. Gracia, con su
          entrenamiento militar, mantenía la retaguardia, su mano nunca lejos de
          su arma.
        </p>
        <p>
          "Esto es... extraordinario", murmuró Julieta, sus ojos brillando con
          una mezcla de fascinación y preocupación mientras examinaba los
          antiguos sistemas del avión. "La tecnología aquí... es como nada que
          haya visto antes. Estos no son sistemas de vuelo estándar."
        </p>
        <p>
          El Dr. Ramírez asintió, su rostro sombrío reflejando la luz de las
          linternas. "Este avión fue diseñado para ser más que un simple medio
          de transporte. Era un laboratorio volante, capaz de realizar
          experimentos en el aire que serían imposibles en tierra."
        </p>
        <p>
          Wilson, que había estado inspeccionando un panel cercano, se volvió
          hacia el científico. "¿Qué tipo de experimentos podrían necesitar algo
          así?"
        </p>
        <p>
          El Dr. Ramírez hesitó por un momento, como si estuviera sopesando
          cuánto revelar. Finalmente, con un suspiro, respondió: "Manipulación
          del espacio-tiempo. Intentábamos crear portales, abrir puertas a otras
          dimensiones."
        </p>
        <p>
          Un silencio pesado cayó sobre el grupo. El concepto parecía sacado de
          una película de ciencia ficción, pero la gravedad en el rostro del Dr.
          Ramírez dejaba claro que no estaba bromeando.
        </p>
        <p>
          "Eso suena a locura", dijo Wilson, rompiendo el silencio. "¿Estás
          diciendo que realmente lo lograron?"
        </p>
        <p>
          El científico negó con la cabeza, sus ojos perdidos en recuerdos
          distantes. "No exactamente. Pero lo que sí logramos fue... peligroso.
          Abrimos una puerta que tal vez nunca debimos abrir. Y ahora, con el
          núcleo de energía reactivado, temo que hayamos despertado algo que
          debería haber permanecido dormido."
        </p>
        <p>
          Gracia, que había estado vigilando la retaguardia, se acercó al grupo.
          Su rostro, normalmente estoico, mostraba signos de preocupación.
          "Entonces, ¿qué hacemos ahora? ¿Cómo detenemos esto?"
        </p>
        <p>
          Julieta, que se había adelantado para examinar una consola antigua,
          levantó la vista. Sus dedos se movían ágilmente sobre el teclado
          polvoriento. "Creo que he encontrado algo. Parece ser un registro de
          vuelo, pero... está encriptado. Nunca había visto un sistema de
          encriptación como este."
        </p>
        <p>
          "Déjame ver", dijo el Dr. Ramírez, acercándose a la pantalla. Sus ojos
          se movieron rápidamente sobre los símbolos y números que parpadeaban
          en la pantalla verdosa. "Esto es... oh, Dios mío."
        </p>
        <p>
          "¿Qué es?", preguntó Miguel, la tensión evidente en su voz. Se acercó
          a la consola, su mano inconscientemente moviéndose hacia su arma.
        </p>
        <p>
          "Es un registro del último vuelo", explicó el científico, su voz
          apenas un susurro. "La fecha... fue justo antes de que todo el
          complejo fuera abandonado. Parece que lograron abrir un portal, pero
          algo salió terriblemente mal."
        </p>
        <p>
          Julieta continuó descifrando el registro, sus ojos moviéndose
          rápidamente entre la pantalla y un dispositivo portátil que había
          sacado de su mochila. "Según esto, el avión quedó atrapado entre
          dimensiones. Parte de él regresó, pero el resto... Dios mío, la
          tripulación..."
        </p>
        <p>
          Un ruido metálico resonó en algún lugar del avión, interrumpiendo sus
          palabras. Todos se quedaron inmóviles, conteniendo la respiración. El
          sonido parecía venir de la parte trasera del avión, donde la oscuridad
          era más densa.
        </p>
        <p>
          "No estamos solos aquí", susurró Gracia, levantando su arma y
          apuntando hacia la fuente del sonido.
        </p>
        <p>
          Miguel tomó una decisión rápida, años de experiencia en situaciones
          peligrosas guiando sus acciones. "Necesitamos salir de aquí y
          reagruparnos. Julieta, descarga toda la información que puedas.
          Wilson, ayúdala. Dr. Ramírez, necesito que nos diga todo lo que sabe
          sobre este avión y los experimentos. Gracia y yo cubriremos la
          retaguardia."
        </p>
        <p>
          Mientras Julieta y Wilson trabajaban frenéticamente en la terminal, el
          resto del equipo formó un perímetro defensivo. El sonido de pasos
          metálicos se acercaba, un eco distorsionado que parecía venir de todas
          partes y de ninguna a la vez.
        </p>
        <p>
          "Listo", anunció Julieta después de lo que pareció una eternidad,
          desconectando un dispositivo de la consola. "Tengo todos los registros
          que pude descargar."
        </p>
        <p>
          Justo cuando se preparaban para salir, una figura apareció en el
          pasillo. No era humana; su cuerpo parecía estar compuesto de sombras y
          luz roja pulsante, como si fuera una manifestación física del
          misterioso "Infierno Escarlata" que habían venido a investigar.
        </p>
        <p>
          "Por todos los cielos", jadeó Wilson, sus ojos abiertos de par en par.
          "¿Qué es eso?"
        </p>
        <p>
          El Dr. Ramírez palideció, su rostro una máscara de horror y
          reconocimiento. "Es un viajero dimensional. Parte de la tripulación
          original, transformada por su exposición al portal. Nunca creímos...
          nunca imaginamos que esto podría pasar."
        </p>
        <p>
          La criatura avanzó, su forma fluctuando entre la solidez y la
          etereidad. Cada paso que daba dejaba una estela de luz roja, como si
          el mismo tejido de la realidad se estuviera desgarrando a su paso. Su
          voz, cuando habló, sonaba como si viniera de muy lejos y de todas
          partes a la vez, un eco distorsionado de humanidad.
        </p>
        <p>
          "Han... vuelto", dijo la criatura, sus palabras reverberando en el
          aire cargado de estática. "El portal... se abre de nuevo. El infierno
          escarlata... se expande."
        </p>
        <p>
          Miguel dio un paso adelante, su arma en alto pero su voz firme. Años
          de entrenamiento le permitían mantener la calma incluso en esta
          situación imposible. "¿Quién eres? ¿Qué quieres?"
        </p>
        <p>
          La criatura pareció enfocarse en Miguel, su forma fluctuante
          estabilizándose por un momento. "Ayuda... necesitamos ayuda. El
          tiempo... se dobla. Realidades... colisionan."
        </p>
        <p>
          Antes de que alguien pudiera responder, una alarma comenzó a sonar en
          todo el avión. Luces rojas parpadearon, bañando todo en un resplandor
          escarlata que hacía juego con el nombre del misterio que habían venido
          a investigar.
        </p>
        <p>
          "¡El núcleo!", gritó el Dr. Ramírez, su voz llena de pánico. "¡Se está
          sobrecargando! Si no lo detenemos, podría abrir un portal
          descontrolado!"
        </p>
        <p>
          "¡Todos fuera, ahora!", ordenó Miguel, su voz cortando a través del
          caos.
        </p>
        <p>
          El equipo corrió hacia la salida, con la criatura dimensional
          desvaneciéndose en las sombras detrás de ellos. Mientras evacuaban el
          avión, el suelo comenzó a temblar, como si toda la estructura
          subterránea estuviera despertando de un largo sueño.
        </p>
        <p>
          Ya afuera, en el vasto hangar subterráneo, observaron con una mezcla
          de asombro y horror cómo el avión se iluminaba desde dentro con una
          luz roja intensa. El aire parecía vibrar con energía, y pequeñas
          grietas de luz escarlata comenzaron a aparecer en el aire, como si la
          realidad misma se estuviera fragmentando.
        </p>
        <p>
          "¿Qué está pasando?", preguntó Gracia, su voz apenas audible sobre el
          ruido creciente. Incluso su entrenamiento militar no la había
          preparado para algo así.
        </p>
        <p>
          Julieta, mirando los datos en su dispositivo con ojos wide, respondió
          con voz temblorosa: "El portal... se está abriendo de nuevo. Pero es
          diferente esta vez. Es... más grande, más inestable."
        </p>
        <p>
          El Dr. Ramírez, su rostro una máscara de culpa y determinación, se
          volvió hacia el grupo. "Tenemos que detenerlo. Si ese portal se abre
          completamente, no solo este complejo, sino todo el mundo podría estar
          en peligro."
        </p>
        <p>
          Miguel asintió, su mente ya trabajando en un plan. "Bien, esto es lo
          que haremos. Julieta, necesito que uses esos datos para encontrar una
          forma de cerrar el portal. Dr. Ramírez, usted la ayudará. Wilson,
          Gracia y yo intentaremos llegar al núcleo de energía. Si podemos
          desactivarlo, tal vez podamos detener esto."
        </p>
        <p>
          Mientras el equipo se preparaba para enfrentar lo desconocido, la
          realidad a su alrededor continuaba distorsionándose. Fragmentos de
          otros lugares, otros tiempos, comenzaron a parpadear en existencia:
          glimpses de cielos alienígenas, estructuras imposibles y criaturas que
          desafiaban la comprensión.
        </p>
        <p>
          El "Infierno Escarlata" estaba desatado, y solo este grupo improbable
          de exploradores e investigadores se interponía entre él y la
          destrucción de todo lo que conocían. Con una última mirada entre
          ellos, un silencioso pacto de determinación y camaradería, se lanzaron
          hacia adelante, hacia el corazón del misterio que habían venido a
          resolver.
        </p>
        <p>
          El verdadero desafío del Infierno Escarlata apenas comenzaba, y las
          consecuencias de sus acciones resonarían no solo a través de este
          mundo, sino potencialmente a través de incontables realidades. El
          destino de todo colgaba de un hilo, teñido de escarlata.
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

export default Capitulo4;
