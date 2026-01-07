import { useDispatch, useSelector } from "react-redux";
import { decreament, increment } from "../redux/counterSlice";

const GlobalState = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-2">
        <h1>Counter Example:</h1>
        <h3>Value persist while navigating to other component</h3>
        <h2 className="p-2">Count: {count}</h2>
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch(increment())}
        >
          Increament +{" "}
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch(decreament())}
        >
          Decreament -{" "}
        </button>
      </div>
    </>
  );
};

export default GlobalState;
