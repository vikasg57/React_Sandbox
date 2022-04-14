import { useReducer } from "react";

const initstate = {
  count: "",
  count2: "",
  res: ""
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "COUNT_ONE":
      return { ...state, count: payload };
    case "COUNT_TWO":
      return { ...state, count2: payload };
    case "ADD":
      return { ...state, res: +state.count + +state.count2 };
    case "SUB":
      return { ...state, res: +state.count - +state.count2 };
    case "MULTI":
      return { ...state, res: +state.count * +state.count2 };
    case "DIV":
      return { ...state, res: +state.count / +state.count2 };

    default:
      return { ...state };
  }
};

const Inputbox = () => {
  const [state, dispatch] = useReducer(reducer, initstate);

  const { res, count, count2 } = state;

  const disabled = count === "" || count2 === "";

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "COUNT_ONE", payload: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "COUNT_TWO", payload: e.target.value });
        }}
      />
      <br />
      <input type="text" value={res} />
      <br />
      <button
        disabled={disabled}
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        ADD
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        SUB
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          dispatch({ type: "MULTI" });
        }}
      >
        {" "}
        MULTI
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          dispatch({ type: "DIV" });
        }}
      >
        DIVISION
      </button>
    </div>
  );
};

export default Inputbox;
