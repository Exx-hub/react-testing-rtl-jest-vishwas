import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test(" renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementBtn);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button twice", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementBtn);
    // await user.click(incrementBtn);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking set button", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.click(setBtn);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("10");

    // screen.getByRole("");
  });

  test("elements are focused in the right order", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const inputElement = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.tab();
    // expect(incrementBtn).toHaveFocus();
    await user.tab();
    // expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
