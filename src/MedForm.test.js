import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MedForm from "./MedForm";

it("renders without crashing", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/add"]}>
      <MedForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});