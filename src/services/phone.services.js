// todas las funciones que contactan al BE solo para CRUD de Todos
import service from "./config.services";

// vamos a crear un funcion para cada Ruta definida en el BE

const getAllPhonesService = () => {
  return service.get("/phones")
}

const getOnePhoneService = (id) => {
  return service.get(`/phones/${id}`)
}



export {
  getAllPhonesService,
  getOnePhoneService,
}