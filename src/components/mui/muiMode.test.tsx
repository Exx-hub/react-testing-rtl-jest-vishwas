import { render, screen } from "@testing-library/react";
import { AppProviders } from "../../providers/AppProviders";
import { customRender, screen as customScreen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });

    const typographyH1 = screen.getByRole("heading", { level: 1 });
    expect(typographyH1).toHaveTextContent("dark mode");
  });

  test("renders text correctly", () => {
    customRender(<MuiMode />);

    const typographyH1 = customScreen.getByRole("heading", { level: 1 });
    expect(typographyH1).toHaveTextContent("dark mode");
  });
});
