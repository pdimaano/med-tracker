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

  return (
    <main className="MedApp w-50">
      <div className="row">
        <div className="col-md-6">
          <section>
            <h3 className="mb-3">Add Medication</h3>
            <MedForm handleSave={create} />
          </section>
        </div>

        <div className="mb-3">
          <h3 className="mb-3">Monday Medications</h3>
          {meds.length > 0
            ? <EditMedList
              meds={meds}
              update={update}
              remove={remove} />
            : <span className="text-muted">No medications.</span>}
        </div>

      </div>
    </main>
  );
}

export default MedApp;