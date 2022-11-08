import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();

    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();

    const pElement = screen.getByText("All fields are mandatory");
    expect(pElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    const imageWithAltElement = screen.getByAltText("may image ba talaga?");
    expect(imageWithAltElement).toBeInTheDocument();

    const customElementWithTestId = screen.getByTestId("custom-element");
    expect(customElementWithTestId).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const inputWithValueElement = screen.getByDisplayValue("Alvin");
    expect(inputWithValueElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText("Bio");
    expect(bioElement2).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const inputElementWithPlaceholder =
      screen.getByPlaceholderText("blank input here");
    expect(inputElementWithPlaceholder).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    expect(submitButtonElement).toBeInTheDocument();

    //   screen.getByRole("");
    //   screen.debug();
  });
});
