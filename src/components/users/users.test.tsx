import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { Users } from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toBeInTheDocument();
  });

  // this is an example of doing the actual api call
  // this will no longer work if you have setup msw already

  // test("renders a list of users", async () => {
  //   render(<Users />);
  //   const users = await screen.findByText("Leanne Graham");
  //   expect(users).toBeInTheDocument();
  // });

  // mocking the api call
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(4);

    const alvin = await screen.findByText("Alvin");
    expect(alvin).toBeInTheDocument();

    // screen.debug();
  });

  // reset the handlers set in main handlers file, this time to throw an error, response with status 500
  // so basically mocking an error response from a fetch request
  //handler below applies only to this single test
  test("renders error", async () => {
    // reset the handler
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    // after resetting the handler, proceed with finding the error text
    // true enough error element is present
    render(<Users />);
    const errorMsg = await screen.findByText("Error fetching users");
    expect(errorMsg).toBeInTheDocument();

    // screen.debug();
  });
});

// create mocks folder:

// create handler -- eto minomodify yung mocked returned data that you want or based sa real api
// create server.ts (boilerplate)
// modify setupTests (boilerplate)
