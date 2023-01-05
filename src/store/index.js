import { applyMiddleware, legacy_createStore as createStore } from "redux";
import apiMiddleware from "../middleware";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(apiMiddleware));
export default store;
