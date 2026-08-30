import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Persona from "./components/Persona";
import Tarjetapelicula from "./components/Tarjetapelicula";
import Contador from "./components/Contador";
import Acordeon from "./components/Toggle";
import Buscador from "./components/Buscador";
import Integrador from "./components/Integrador"
import ListaCompras from "./components/Integrador";
/*
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
      <div>
          <Contador/>
        </div>
        <div>
          <Acordeon
          titulo=" El misterio de las islas Flannan:"
          contenido="En diciembre de 1900, tres fareros desaparecieron sin dejar rastro en una remota isla escocesa.
           Cuando llegó el barco de relevo, el faro estaba vacío. En el interior, los relojes estaban parados, la mesa 
           estaba servida con comida intacta y una silla yacía volcada.Lo más extraño eran las anotaciones del diario: los 
           fareros describían una tormenta terrorífica que los hacía llorar de miedo. Sin embargo, los registros climáticos
            de la zona demostraron que esos días el clima estuvo completamente despejado. Nunca se encontraron sus cuerpos y su 
            destino sigue siendo un enigma absoluto."
          />
        </div>
        <div>

          <Buscador/>
        </div>
    </>
   
  );
}
*/
function App(){
  return(
 <div>
  <ListaCompras/>
 </div>
  );
}


export default App;


