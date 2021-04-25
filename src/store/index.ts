import { rootReducer } from "./reducers/rootReducer";
import { compose, createStore } from "redux";

// const saveToLocalStorage = (store: any) => {
//   try {
//     const serializedStore = JSON.stringify(store);
//     localStorage.setItem("store", serializedStore);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const serializedStore = localStorage.getItem("store");
//     if (serializedStore === null) return undefined;
//     return JSON.parse(serializedStore);
//   } catch (err) {
//     console.log(err);
//     return undefined;
//   }
// };

// const persistedState = loadFromLocalStorage();

// const store = createStore(rootReducer, persistedState);

// store.subscribe(() => saveToLocalStorage(store.getState()));

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
