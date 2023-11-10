import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

const testData = {
  sunday: [
    {
      id: "sunday med",
      name: "test1",
      description: "test one description",
    },
  ],
  monday: [
    {
      id: "monday med",
      name: "test2",
      description: "test two description",
    },
  ],
};

describe("Home component", function () {
  it("renders the home component", function () {
    render(<Home />);
  });
})