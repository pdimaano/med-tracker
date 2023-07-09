import React from "react";
import MedApp from "./MedApp";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

/** Site application
 *
 *  App -> MedApp
 */

function App() {
  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>Medication Tracker</h1>
        </div>
      </header>

      <section className="container mt-4">
        <MedApp initialMeds={[
          {
            id: 1,
            name: "Ozempic",
            description: "Antidiabetic medication",
            dosage: "0.5mg once weekly"
          },
        ]} />
      </section>
    </main>
    
  );
}

export default App;
