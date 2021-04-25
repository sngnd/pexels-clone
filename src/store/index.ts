import { rootReducer } from "./reducers/rootReducer";
import { createStore } from "redux";

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

const store = createStore(rootReducer);

export default store;
