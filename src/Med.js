import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Details for medication.
 *
 *  Props:
 *  - cantFind: path to Navigate to if can't find item w/ that ID
 *  - meds: list of medications
 *
 **/

function Med({ med }) {
  return (
    <div className="Med">
      <div><b>{med.name}</b> </div>
      <div>{med.description}</div>
    </div>
  );
}

export default Med;