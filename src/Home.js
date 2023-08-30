import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RxImage from "./img/Rx_symbol.png"

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
            Your handy prescription manager for each day of the week
          </CardText>
          <img src={RxImage} className="rx-image" alt="Rx symbol" />
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
