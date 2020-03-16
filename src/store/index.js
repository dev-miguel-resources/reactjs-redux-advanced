import { createStore, applyMiddleware } from "redux"; //para trabajar con redux-thunk
import rootReducer from "../reducers"; //me trae todos los reducers
import thunk from "redux-thunk"; //permite escribir creadores de acciones que devuelven una función en lugar de una acción. El thunk se puede usar para retrasar el envío de una acción, o para enviar solo si se cumple una determinada condición.

import { persistStore, persistReducer } from "redux-persist"; //activar la persistencia
import storage from "redux-persist/lib/storage"; //almacen de persistencia para redux

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //recibe mi objeto de config y el aglomerado de mis reducers

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk)); //acá le digo creame un store con persistencia y con manejo de funciones
  let persistor = persistStore(store); //el persistStore, es el que crea finalmente la persistencia para mi store
  return { store, persistor }; //retorno mi tienda y mi persistor definido
};
