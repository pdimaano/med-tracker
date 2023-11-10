import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home component", function () {
  it("renders the home component", function () {
    render(<Home />);
  });

  it("matches a snapshot", function () {
    const { getByText, asFragment } = render(
      <Home />
    );
    getByText(/Daily Medication/);

    expect(asFragment()).toMatchSnapshot();
  })
})