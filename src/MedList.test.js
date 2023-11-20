import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MedList from "./MedList";

it("renders without crashing for monday meds", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/monday"]}>
      <MedList day="monday" meds={[{ id: 0, name: "monday med" }]} />
    </MemoryRouter>
  );
  screen.getByText("monday med");
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing for friday meds", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/friday"]}>
      <MedList day="friday" meds={[{ id: 0, name: "friday med" }]} />
    </MemoryRouter>
  );
  screen.getByText("friday med");
  expect(asFragment()).toMatchSnapshot();
});