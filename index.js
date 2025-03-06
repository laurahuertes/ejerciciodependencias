const axios = require("axios");
const _ = require("lodash"); // Añadir la dependencia lodash

async function obtenerDatos() {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const datos = respuesta.data;

    // Usar lodash para clonar los datos obtenidos
    const datosClonados = _.cloneDeep(datos);

    console.log("Datos obtenidos:", datos);
    console.log("Datos clonados:", datosClonados);
  } catch (error) {
    console.error("Error al obtener los datos:", error.message);
  }
}

obtenerDatos();
