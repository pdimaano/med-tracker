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
});