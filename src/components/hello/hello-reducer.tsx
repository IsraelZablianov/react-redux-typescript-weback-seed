import HelloConstants from "./constants";
import { EnthusiasmActions } from "./hello-actions";
import { StoreState } from "../../reducer/store-type";

export function enthusiasm(state: StoreState, action: EnthusiasmActions): StoreState {
  switch (action.type) {
    case HelloConstants.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case HelloConstants.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}