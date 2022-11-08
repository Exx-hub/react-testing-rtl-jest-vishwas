import { useCounter } from "../../hooks/useCounter/useCounter";
import { GreetProps } from "./greet.types";

function Greet({ name }: GreetProps) {
  const { count, increment, decrement } = useCounter({ initialCount: 1 });
  return (
    <>
      <div>Hello {name}</div>
      <h2>{count}</h2>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
}

export default Greet;
