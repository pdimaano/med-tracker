import React, { useState } from "react";
import Med from "./Med";
import MedForm from "./MedForm";

/** Show editable medication.
 *
 *  Props
 *  - med
 *  - updated(): fn to call to update a med
 *  - remove(): fn to call to remove a med
 *
 *  EditableMedList -> EditableMed -> { Med, MedForm }
 *
 */