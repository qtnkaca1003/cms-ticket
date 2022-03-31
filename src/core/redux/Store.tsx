import { createStore, applyMiddleware } from "redux";
import { reducer } from "@modules/ticket/Reducer/index"
import thunkMiddleware from 'redux-thunk'

export const store = 
createStore(reducer ,applyMiddleware(thunkMiddleware));

