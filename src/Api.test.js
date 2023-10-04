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