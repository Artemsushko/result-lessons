import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "./reducers/todosReducer";
import { uiReducer } from "./reducers/uiReducer";

const reducer = combineReducers({
  todos: todosReducer,
  ui: uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
