import React from "react";
import { render } from "@testing-library/react";
import Login from "../login";

describe("Home", () => {
  test("Home Page", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
