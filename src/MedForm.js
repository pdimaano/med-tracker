import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  Label,
  Input,
} from "reactstrap";

/** Form for adding a medication.
 *
 *  Props:
 *  - addMed: call to add med in parent
 *
 *  State:
 *  - local state for each field on form
 *
 */

function MedForm({ addMed }) {
  const [form, setForm] = useState({
    day: "sunday",
    name: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((f) => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let { day, ...data } = form;
    addMed(day, data);
    navigate("/");
  };

  const { day, name, description } = form;

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">Add A Medication</CardTitle>

          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Label for="day">Day</Label>
              <Input
                type="select"
                name="day"
                id="day"
                value={day}
                onChange={handleChange}
              >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </Input>
            </div>

            <div className="mb-3">
              <Label for="name">Name</Label>
              <Input
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={description}
                onChange={handleChange}
              />
            </div>

            <Button className="float-end btn btn-light">Add Med</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default MedForm;
