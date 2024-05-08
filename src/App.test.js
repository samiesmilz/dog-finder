import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome to Dog Finder.");
  expect(linkElement).toBeInTheDocument();
});

// import Router from "react-router";
// Router.useParams = jest.fn();
// import Dog from "./Dog";

// import { render, screen, waitFor } from "@testing-library/react";

// test("renders learn react link", () => {
//   Router.useParams.mockReturnValue({ a: "b" });
//   render(<Dog />);
// });
