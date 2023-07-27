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

function Med({ meds, cantFind }) {
  const { id } = useParams();

  let med = meds.find((med) => med.id === id);
  if (!med) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">{med.name}</CardTitle>
          <CardText className="font-italic">{med.description}</CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Med;