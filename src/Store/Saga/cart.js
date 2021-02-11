import { put, takeLatest, all } from "redux-saga/effects";
import { FETCH_CART, setCart, toggleCartLoading } from "../Actions/actions";

function* fetchNews() {
  yield put(toggleCartLoading(true));
  const response = yield fetch("/db.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  yield put(toggleCartLoading(false));
  yield put(setCart(response.items));
}

function* actionWatcher() {
  yield takeLatest(FETCH_CART, fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
