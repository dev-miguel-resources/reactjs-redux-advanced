import { CONSTANTS } from "../actions";
import uuid from "uuidv4"; //doy un uuid aleatorio

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD, //tipo de la action
    payload: id //modifico por medio de esta propiedad
  };
};

export const addBoard = title => { //agrego por medio de un title
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD, //recibo el nombre de la accion
    payload: { title, id } //va a ser el contenido
  };
};
