import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import MedForm from "./MedForm";
import EditMedList from "./EditMedList";

/** App for managing a medication tracker.
 *
 *  Props:
 *  - initialMeds: possible array of [ med, ... ]
 *
 *  State:
 *  - meds: array of [ med, ... ]
 *
 * App -> MedApp -> { MedForm, EditMedList }
 */