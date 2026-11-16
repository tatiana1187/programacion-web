const URL = "http://localhost:3000/tareas";

async function CrearTareas(texto) {
  const respuesta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      texto: texto,
      hecha: false,
    }),
  });
  const tareaCreada = await respuesta.json();
  console.log("tarea creada:", tareaCreada);
  return tareaCreada;
}
//sssssCrearTareas("Aprender Fetching Data");
async function cambiarTexto (id){
  const respuesta = await fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({

      hecha: true,
    }),
  });

}
//marcarhecho("e7DwgkQTIjk");

async function borrarTarea(id) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  if (!respuesta.ok) {
    throw new Error(`Error al borrar la tarea: ${respuesta.status}`);
  }
  console.log("Tarea eliminada", id);
}
//borrarTarea("ggz9W8pR0eg");

  async function reemplazarTarea(id, texto, hecha) {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texto: texto,
        hecha: hecha,
      }),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al actualizar: ${respuesta.status}`);
    }

    const tareaActualizada = await respuesta.json();
    console.log("Tarea reemplazada:", tareaActualizada);
    return tareaActualizada;
  }
 reemplazarTarea("VxKza4bk2bI", "nose, me quiero ir", true)
