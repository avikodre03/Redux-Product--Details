import { legacy_createStore as createStore } from "redux";
import productReducer from "./Reducer";

const productStore = createStore(productReducer);

console.log(productStore.getState());
productStore.subscribe(() => {
    console.log(productStore.getState());
})

export default productStore;