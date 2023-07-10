import React from "react";

/** Presentation component for a medication.
 *
 *  Props:
 *  - med: like { id, name, description }
 *
 *  { EditableMed } -> Med
 **/

function Med({ med }) {
  return (
    <div className="Med">
      <div><b>{med.name}</b> </div>
      <div>{med.description}</div>
    </div>
  );
}

export default Med;