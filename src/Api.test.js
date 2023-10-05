import axios from "axios";
import * as api from "./api";

test("fetchMeds", async function () {
  axios.get = jest.fn(() => ({
    data: [],
  }));

  const result = await api.fetchMeds();
  expect(result).toEqual([]);
  expect(axios.get).toHaveBeenCalled();
});

test("addMed", async function () {
  axios.post = jest.fn();

  const result = await api.addMed();
  expect(result).toBeUndefined();
  expect(axios.post).toHaveBeenCalled();
});