import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./App.css";

function getRandomAnimal() {
  const animals = [
    { animal: "bird" },
    { animal: "cat" },
    { animal: "cow" },
    { animal: "dog" },
    { animal: "gator" },
    { animal: "horse" },
  ];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log({ animals });
  };
  const renederedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renederedAnimals}</div>
    </div>
  );
}

export default App;
