import React from "react";
import { render } from "@testing-library/react";
import Home from "../index";

describe("Home", () => {
  test("Home Page", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
