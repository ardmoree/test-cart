import { put, takeLatest, all, call } from "redux-saga/effects";
import { FETCH_CART, setCart, toggleCartLoading } from "../Actions/actions";
import axios from "axios";

function* fetchItems() {
  yield put(toggleCartLoading(true));

  //for deployed
  // const response = yield axios.get(`./server/db.json`).then((res) => res);

  // for development purposes use this instead, sorry can't figure out how to make it work for both at the same time
  const response = yield axios.get(`/db.json`).then((res) => res);

  if (response.status !== 200) {
    console.log("Couldn't get cart items");
  } else {
    yield put(toggleCartLoading(false));
    yield put(setCart(response.data.items));
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_CART, fetchItems);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
