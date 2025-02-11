import { ACTIONS } from "./App";
import "./style.css";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className={digit === "0" ? "span-two" : ""}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
