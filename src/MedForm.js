import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Form,
  Label,
  Input
} from "reactstrap"

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
    day: "Sunday",
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
  }

  const { day, name, description } = form;

  return (
    <form className="NewMedForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="newMed-name"
          name="name"
          className="form-control"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          aria-label="Name"
        />
      </div>
      <div className="mb-3">
        <input
          id="newMed-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3">
        <button className="btn-primary btn btn-sm float-end NewMedForm-addBtn">
          Done
        </button>
      </div>

    </form>
  );
}

export default MedForm;