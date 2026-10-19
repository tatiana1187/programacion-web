import { useEffect, useState } from 'react';
import './App.css'
const URL = "https://api.github.com/users/tatiana1187";

function App() {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    async function traerPerfil() {
      try {
        const respuesta = await fetch(URL)
        if (!respuesta.ok) {
          throw new Error('Error ${respuesta.status}');
        }
        const perfil = await respuesta.json();
        console.log(perfil);
        setDatos(perfil);
      } catch (error){
        console.log(error);
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }
    traerPerfil();
  }, []);
  if (cargando) {
    return<p>cargando....</p>
  }
  if (error) {
    return <p>Ocurrio un error {error}</p>
  }
  return (
    <>
      <h1>Fetching Data</h1>
      <h1>lista de usuarios</h1>
      <img>src={datos.avatar_url} alt={'foto de ${datos.name}}||${datos.login width={"150px"}'}</img>

      <h3>{datos?.name}</h3>
      <p>Repositorios publicos {datos.public_repos }</p>
    </>
  );
}

export default App;
