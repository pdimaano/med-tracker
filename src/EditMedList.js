import React from "react";
import EditMed from "./EditMed";

/** Show list of editable medications
 *
 *  Props:
 *  - meds: array of [ med, ... ]
 *  - updated(): fn to call to update a med
 *  - remove(): fn to call to remove a med
 *
 *  MedApp -> EditMedList -> [ EditMed, ... ]
 */