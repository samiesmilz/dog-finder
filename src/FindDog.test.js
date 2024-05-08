import FindDog from "./FindDog";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("FindDog renders null with an empty dogs list", () => {
  // Render the component with an empty dogs array
  const { container } = render(
    <MemoryRouter>
      <FindDog dogs={[]} />
    </MemoryRouter>
  );

  // Expect the container to be empty
  expect(container).toBeEmptyDOMElement();
});
