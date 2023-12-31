import * as api from "./api";
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

api.fetchMeds = jest.fn();
api.addMed = jest.fn();

const WELCOME_TEXT = "Daily Medication Tracker";

describe("Med Tracker routes", function () {
  beforeEach(() => {
    api.fetchMeds.mockReturnValue([]);
    api.addMed.mockReturnValue([]);
  });

  it("renders without crashing", async function () {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      screen.getByText(WELCOME_TEXT);
    });
  });

  it("renders the home snapshot", async function () {
    const { asFragment, debug } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(WELCOME_TEXT));
    expect(api.fetchMeds).toHaveBeenCalledTimes(7);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a loading message before the data is loaded", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    screen.getByText("Loading...");
    await waitFor(() => screen.getByText(WELCOME_TEXT));
  });

  it("renders the Sunday medications", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/sunday"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText("Sunday Meds"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the Wednesday medications", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/wednesday"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText("Wednesday Meds"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a medication", async function () {
    api.fetchMeds.mockReturnValue([
      {
        id: "test1",
        name: "Test Med",
        description: "Test description",
      },
    ]);
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/monday/test1"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText("Test Med"));
    screen.getByText(/Test description/i);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the add med form", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/monday/test1"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(/add med/i));
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds a medication successfully", async function () {
    const { container, debug } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => fireEvent.click(screen.getByText("Add Med")));

    fireEvent.change(screen.getByLabelText("Day"), {
      target: { value: "monday" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "test name" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "test description" },
    });
    const button = container.querySelector("button");

    await waitFor(() => fireEvent.click(button));
    expect(api.addMed).toHaveBeenCalled();

    await waitFor(() => screen.getByText(WELCOME_TEXT));
  });
});