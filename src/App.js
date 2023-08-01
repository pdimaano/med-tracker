import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { fetchMeds, addMed as addMedApi } from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import MedList from "./MedList";
import Med from "./Med";
import slugify from "slugify";
import MedForm from "./MedForm";

/** Medication tracker main application.
 *
 *  Props: none
 *
 *  State:
 *  - meds: list of med data objects - populated via AJAX call
 *  - isLoading: boolean, has data loaded yet?
 *
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [meds, setMeds] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });

  /** Load data from backend */

  useEffect(function fetchMedsOnMount() {
    async function getAllMeds() {
      const sundays = await fetchMeds("sunday");
      const mondays = await fetchMeds("monday");
      const tuesdays = await fetchMeds("tuesday");
      const wednesdays = await fetchMeds("wednesday");
      const thursdays = await fetchMeds("thursday");
      const fridays = await fetchMeds("friday");
      const saturdays = await fetchMeds("saturday");
      setMeds({
        sundays,
        mondays,
        tuesdays,
        wednesdays,
        thursdays,
        fridays,
        saturdays,
      });
      setIsLoading(false);
    }

    getAllMeds();
  }, []);

  /** Call API to add med for specific day; update state */

  async function addMed(day, { name, description }) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description };
    await addMedApi(day, objData);
    setMeds((m) => ({
      ...m,
      [day]: [...m[day], objData],
    }));
  }

  /** Show app frame, navbar and routes */

  let {
    sundays,
    mondays,
    tuesdays,
    wednesdays,
    thursdays,
    fridays,
    saturdays,
  } = meds;

  if (isLoading) {
    return <p>Loading...</p>
  }
}
