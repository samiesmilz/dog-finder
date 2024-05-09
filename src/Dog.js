import React from "react";

import "./Dog.css";

const Dog = ({ dog }) => {
  return (
    <div className="Dog">
      <div>
        <h3>Meet: {dog.name}.</h3>
        <img src={`/${dog.src}.jpg`} className="Dog-image" alt="cute dog" />
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
