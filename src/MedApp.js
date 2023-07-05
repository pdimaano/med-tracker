import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import MedForm from "./MedForm";
import EditMedList from "./EditMedList";

/** App for managing a medication tracker.
 *
 *  Props:
 *  - initialMeds: possible array of [ med, ... ]
 *
 *  State:
 *  - meds: array of [ med, ... ]
 *
 * App -> MedApp -> { MedForm, EditMedList }
 */

function MedApp({ initialMeds }) {
  const [meds, setMeds] = useState(initialMeds);

  console.log("MedApp", initialMeds, meds);

  /** Add a new medication to list */
  function create(newMed) {
    setMeds(meds => [...meds, { id: uuid(), ...newMed }]);
  }

  /** Updated a medication with updatedMed */
  function update(updatedMed) {
    setMeds(meds =>
      meds.map(med =>
        med.id === updatedMed.id ? updatedMed : med,
      ),
    );
  }

  /** Delete a med by id */
  function remove(id) {
    setMeds(meds => meds.filter(med => med.id !== id));
  }

  
}