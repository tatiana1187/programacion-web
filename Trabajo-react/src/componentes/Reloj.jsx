import { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log("tic")
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <h2>Hora actual</h2>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default Reloj;