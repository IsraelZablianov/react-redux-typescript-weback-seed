import { createStore } from "redux";
import { enthusiasm } from "../components/hello/hello-reducer";
import { StoreState } from "./store-type";

export const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  });