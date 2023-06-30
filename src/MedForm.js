import React, { useState } from "react";

const defaultInitialFormData = { name: "", description: "", dosage: "" };

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
}