import React from "react";

import duke from "./duke.jpg";
import whiskey from "./whiskey.jpg";
import perry from "./perry.jpg";
import "./Dog.css";

const Dog = ({ dog }) => {
  let dogImg;
  if (dog.src === "duke") {
    dogImg = duke;
  } else if (dog.src === "perry") {
    dogImg = perry;
  } else {
    dogImg = whiskey;
  }
  return (
    <div className="Dog">
      <div>
        <h3>Meet: {dog.name}.</h3>
        <img src={dogImg} className="Dog-image" alt="cute dog" />
        <h4>Interesting facts about {dog.name} 🐶</h4>
        <ul className="Dog-facts">
          {dog.facts.map((fact, indx) => (
            <li key={indx}>{fact}</li>
          ))}
        </ul>
        <h5>
          {dog.name} is only {dog.age} years old.
        </h5>
      </div>
    </div>
  );
};

export default Dog;
