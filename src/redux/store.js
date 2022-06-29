import { configureStore } from "redux";
import ROOT from "./index";
const store = configureStore({ reducer: ROOT });
export default store;
