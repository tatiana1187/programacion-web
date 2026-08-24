export default function Tarjetapelicula({ titulo, año, visita }) {
  /* if multiple linea 
  if(visita === true){
    <>valido</>
  }else {
    <>no valido</>
  }*/
  
  return (
    <>
      <h1>{titulo}</h1>
      <p>{año}</p>
      {/*condicional ternario(if en una linea)*/ }
                    {/*if            else*/ }
      {visita === true ? <p>valido</p> : <p>no valido</p>}
    </>
  );
}
