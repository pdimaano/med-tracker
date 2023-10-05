import * as api from "./api";
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

api.fetchMeds = jest.fn();
api.addMed = jest.fn();

const WELCOME_TEXT = "Daily Medication Tracker";