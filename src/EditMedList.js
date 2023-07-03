import React from "react";
import EditMed from "./EditMed";

/** Show list of editable medications
 *
 *  Props:
 *  - meds: array of [ med, ... ]
 *  - updated(): fn to call to update a med
 *  - remove(): fn to call to remove a med
 *
 *  MedApp -> EditMedList -> [ EditMed, ... ]
 */

function EditMedList({ meds, update, remove }) {
  return meds.map(med => (
    <EditMed
      key={med.id}
      med={med}
      update={update}
      remove={remove}
    />
  ));
}

export default EditMedList;