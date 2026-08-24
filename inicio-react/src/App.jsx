import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Persona from "./components/Persona";
import Tarjetapelicula from "./components/Tarjetapelicula";

const arregloElementos = [
  {
    name: "Coca-Cola",
    cc: "2,5l",
    id: 1,
  },
  {
    name: "Baggio",
    cc: "2,5l",
    id: 2,
  },
];
const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Persona nombre="Pepita" apellido="Perez" />
       <div key ={peliculas.id}>
      {peliculas.map((pelicula, index) => (
        <Tarjetapelicula titulo={pelicula.titulo} año={pelicula.año} visita={pelicula.vista}/>
      ))}
      </div>
    </>
    
  );
}

export default App;
