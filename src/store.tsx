import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { thunk } from "redux-thunk"
import {
  userReducer,
  usersReducer,
  postReducer,
  postsReducer,
  appReducer,
} from "./reducers"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const reducer = combineReducers({
  user: userReducer,

  users: usersReducer,

  post: postReducer,

  posts: postsReducer,

  app: appReducer,
})

export type RootState = ReturnType<typeof reducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
