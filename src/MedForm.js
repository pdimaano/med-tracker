import React, { useState } from "react";

const defaultInitialFormData = { name: "", description: "" };

/** Form to add medication.
 *
 *  Props:
 *  - defaultData
 *  - handleSave: function to call in parent.
 *
 *  { MedApp, EditMed } -> MedForm
 *
 */

function MedForm({ initialFormData = defaultInitialFormData, handleSave }) {
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

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