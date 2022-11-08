import { CounterMockProps } from "./counterMock.types";

export const CounterMock = (props: CounterMockProps) => {
  return (
    <div>
      <h1>Counter Mock</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
