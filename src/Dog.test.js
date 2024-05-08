import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Dog from "./Dog";
import dogs from "./_testDogs";

test("renders", () => {
  render(
    <MemoryRouter>
      <Dog dog={dogs[1]} />
    </MemoryRouter>
  );
});
