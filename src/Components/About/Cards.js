import React from "react";
import FlippableCard from "./FlippableCard";
import "./Cards.css";
import qax from "./CardComponents/imgs/qax.png";

const Cards = () => {
  return (
    <div className="cards-container">
      <FlippableCard
        back="Murad Isayev"
        front="Backend & UI/UX"
        className="Murad"
        used="NestJS"
      />
      <FlippableCard
        front="FrontEnd"
        back="Nijat Abdullazada"
        className="Nijat"
      />
      <FlippableCard
        front="Team Lead & Backend"
        back="Kamal Alasgarli"
        className="Cumal"
        photo={qax}
        used="NestJS"
      />

      <FlippableCard
        front="Backend"
        back="Amina Ismayilzada"
        className="Amina"
      />
      <FlippableCard
        front="Security &
      FrontEnd"
        back="Arif Abdullayev"
        className="Arif"
      />
    </div>
  );
};

export default Cards;
