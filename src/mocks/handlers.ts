import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200), // status
      ctx.json([
        { name: "Alvin" },
        { name: "David" },
        { name: "mark" },
        { name: "Angel" },
      ]) // mocked data similar to what you expect from api
    );
  }),
];
