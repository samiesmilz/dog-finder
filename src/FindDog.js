import React from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";

function FindDog({ dogs }) {
  const { name } = useParams();

  if (name) {
    const dog = dogs.find((dg) => dg.name.toLowerCase() === name.toLowerCase());
    return <Dog dog={dog} />;
  }

  return null;
}

export default FindDog;
