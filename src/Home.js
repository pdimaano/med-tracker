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
              Your Daily Medication Tracker
            </p>
          </CardTitle>
          <CardText>
            Use the navigation bar at the top.
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
