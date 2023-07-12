import React, { useState } from "react";
import Med from "./Med";
import MedForm from "./MedForm";

/** Show editable medication.
 *
 *  Props
 *  - med
 *  - updated(): fn to call to update a med
 *  - remove(): fn to call to remove a med
 *
 *  EditableMedList -> EditableMed -> { Med, MedForm }
 *
 */

function EditMed({ med, remove, update }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing((edit) => !edit);
  }

  /** Call remove fn passed to this */
  function handleDelete() {
    return remove(med.id);
  }

  /** Edit form saved; toggle is Editing and update in ancestor */
  function handleSave(formData) {
    update({ id: med.id, ...formData });
    setIsEditing(false);
  }

  return (
    <div className="EditMed w-50">
      {isEditing ? (
        <MedForm initialFormData={med} handleSave={handleSave} />
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditMed-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditMed-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <Med med={med} />
        </div>
      )}
    </div>
  );
}

export default EditMed;
