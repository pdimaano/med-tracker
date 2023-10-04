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

it("calls addMed with correct inputs upon save", async function () {
  const handleSave = jest.fn();
  const { container } = render(
    <MemoryRouter initialEntries={["/add"]}>
      <MedForm addMed={handleSave} />
    </MemoryRouter>
  );
  fireEvent.change(screen.getByLabelText("Day"), {
    target: { value: "Sunday" },
  });
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "test name" },
  });
  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "test description" },
  });
  const button = container.querySelector("button");

  fireEvent.click(button);
  expect(handleSave).toHaveBeenCalled();
  expect(handleSave).toHaveBeenCalledWith("Sunday", {
    name: "test name",
    description: "test description",
  });
});