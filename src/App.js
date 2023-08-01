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