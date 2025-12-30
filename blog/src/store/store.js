import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  appReducer,
  commentsReducer,
  postReducer,
  postsReducer,
  userReducer,
  usersReducer,
} from "./reducers";

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
