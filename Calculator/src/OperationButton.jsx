import { ACTIONS } from "./App";
import "./style.css";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="light-yellow"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
