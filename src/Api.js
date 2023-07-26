/** API calls for application */

import axios from "axios";

const BASE_API_URL = "http://localhost:5001";

/** Fetch list of meds for specific day */

export async function fetchMeds(day) {
  let res = await axios.get(`${BASE_API_URL}/${day}`);
  return res.data;
}

/** Add med to list for specific day */

export async function addMed(day, data) {
  await axios.post(`${BASE_API_URL}/${day}`, data);
}