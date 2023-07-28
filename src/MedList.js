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

function MedList({ day, meds }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">{day} Meds</CardTitle>
          <ListGroup>
            {meds.map((med) => (
              <Link to={`/${day.toLowerCase()}/${med.id}`} key={med.id}>
                <ListGroupItem>{med.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default MedList;
