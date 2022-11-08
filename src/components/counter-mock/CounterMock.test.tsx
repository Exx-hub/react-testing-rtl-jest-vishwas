import { render, screen } from "@testing-library/react";
import { CounterMock } from "./CounterMock";
import userEvent from "@testing-library/user-event";

describe("CounterMock", () => {
  test("renders correctly", () => {
    render(<CounterMock count={0} />);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toBeInTheDocument();
  });

  test("renders initial count from props correctly", () => {
    render(<CounterMock count={3} />);
    const countElement = screen.getByText("3");
    expect(countElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const user = userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterMock
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();

    await user.click(incrementBtn);
    await user.click(decrementBtn);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
