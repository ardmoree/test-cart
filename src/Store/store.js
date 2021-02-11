import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga/cart.js";
import cartReducer from "./Reducers/reducers";

const sagaMiddleware = createSagaMiddleware();

export default createStore(cartReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
