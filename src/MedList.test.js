import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MedList from "./MedList";

it("renders without crashing for med list", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/monday"]}>
      <MedList day="monday" meds={[{ id: 0, name: "test med" }]} />
    </MemoryRouter>
  );
  screen.getByText("test med");
  expect(asFragment()).toMatchSnapshot();
});