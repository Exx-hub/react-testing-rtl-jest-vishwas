import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["node", "javascript", "reactjs"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("start learning button is not rendered initially ", () => {
    render(<Skills skills={skills} />);

    const startLEarningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLEarningBtn).not.toBeInTheDocument();
  });

  test("start learning button gets rendered after 1 second", async () => {
    render(<Skills skills={skills} />);

    // screen.debug();

    const startLEarningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 1200 } // adjust the default timeout (1000ms) if needed, for longer things like fetching data
    );
    // screen.debug();
    expect(startLEarningBtn).toBeInTheDocument();
  });

  test("login button gets rendered - test using DOM", () => {
    render(<Skills skills={skills} />);

    const loginBtn = document.getElementById("login-btn");

    expect(loginBtn).toBeInTheDocument();
  });

  // using log roles to view available roles, but screen.getByRole("") is easier
  test("start learning button gets rendered after 1 second", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);

    const startLEarningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 1200 }
    );

    expect(startLEarningBtn).toBeInTheDocument();
  });

  // screen.getByRole("");
  // screen.debug();
});
