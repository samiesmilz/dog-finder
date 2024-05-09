import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import dogs from "./_testDogs";

test("renders welcome to dog finder", () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome to Dog Finder.");
  expect(linkElement).toBeInTheDocument();
});

test("renders all dog names in the list", () => {
  render(<App />);
  const dogNames = dogs.map((d) => d.name);
  for (const name of dogNames) {
    const linkElement = screen.getByText(new RegExp(`Meet: ${name}`, "i"));
    expect(linkElement).toBeInTheDocument();
  }
});
