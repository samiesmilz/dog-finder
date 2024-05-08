import "./App.css";
import dogData from "./db.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import DogList from "./DogList";
import FindDog from "./FindDog";
function App() {
  return (
    <div className="App">
      <h1>Welcome to Dog Finder.</h1>
      <BrowserRouter>
        <Nav dogs={dogData.dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogData.dogs} />} />
          <Route path="/dogs/:name" element={<FindDog dogs={dogData.dogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
