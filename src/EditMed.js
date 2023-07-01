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

function EditableMed({ med, remove, update }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  /** Call remove fn passed to this */
  function handleDelete() {
    return remove(todo.id);
  }

  /** Edit form saved; toggle is Editing and update in ancestor */
  function handleSave(formData) {
    update({ id: med.id, ...formData });
    setIsEditing(false);
  }
}