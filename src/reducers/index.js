import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({ //acá digo que reducers combinar
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer
});
