import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Main = () => {
  const teamMembers = [
    "team1.png",
    "team2.png",
    "team3.png",
    "team4.png",
    "team5.png",
    "team6.png",
    "team7.png",
    "team8.png",
  ];
  const navigate = useNavigate();

  const goToNextChapter = () => {
    navigate("/prologo");
  };

  return (
    <div className="main-container">
      <video controls autoPlay muted loop className="main-video">
        <source
          src={`${process.env.PUBLIC_URL}/img/video-libro.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* <img
        src={`${process.env.PUBLIC_URL}/img/video_portada.mp4`}
        type="video/mp4"
        alt="Infierno Escarlata"
        className="main-image"
      /> */}
      <h1>Infierno Escarlata</h1>
      <h3>Libro elaborado con 🫀 por el Club de la IA</h3>
      <button className="next-button" onClick={goToNextChapter}>
        Leer Infierno Escarlata ✨
      </button>
      <div className="team-container">
        <h2>Team Creativo</h2>
        <div className="team-grid">
          {teamMembers.map((image, index) => (
            <div key={index} className="team-member">
              <img
                src={`${process.env.PUBLIC_URL}/img/${image}`}
                alt="Nombre Apellido"
                className="team-image"
              />
              <p>Nombre Apellido</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
