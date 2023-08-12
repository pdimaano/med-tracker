import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Home Page
 *
 *  Props: none
 */

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="fw-bold" style={{ fontSize: "1.5em" }}>
              Daily Medication Tracker
            </p>
          </CardTitle>
          <CardText>
            For every day of the week
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
