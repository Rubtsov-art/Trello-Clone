import {createStore, combineReducers} from "redux";
import appReducer from "./appReducer";

const reducers = combineReducers({
    app: appReducer,
});

const store = createStore(reducers, 
    localStorage.getItem("redux-store") ? JSON.parse(localStorage.getItem("redux-store")) : {},
    );

store.subscribe(() => {
    localStorage.setItem("redux-store", JSON.stringify(store.getState()))
  })

window.store = store;

export default store;



