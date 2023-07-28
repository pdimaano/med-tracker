import React from "react";
import { Link } from "react-router-dom";
import "./MedList.css";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

/** Show list of medications
 *
 *  Props:
 *  - meds: list of med data objects
 *  - day: day of the week
 *
 */

function EditMedList({ meds, update, remove }) {
  return meds.map((med) => (
    <EditMed key={med.id} med={med} update={update} remove={remove} />
  ));
}

export default EditMedList;
