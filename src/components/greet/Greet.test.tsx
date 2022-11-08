import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// TDD
// 1. greet should render the text hello and if a name is passed into the component
// it should render hello followed by the name

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />); // RTL uses method to create a virtual dom passing in Greet component
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument(); // expect and matcher function
  });

  test("renders with a name...", () => {
    render(<Greet name="Alvin" />);
    const textElement = screen.getByText(/hello Alvin/i);
    expect(textElement).toBeInTheDocument();
  });
});
