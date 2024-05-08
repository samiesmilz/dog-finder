import React from "react";
import "./DogList.css";
import Dog from "./Dog";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {dogs.map((dog, indx) => (
        <Dog key={indx} dog={dog} />
      ))}
    </div>
  );
};
export default DogList;
