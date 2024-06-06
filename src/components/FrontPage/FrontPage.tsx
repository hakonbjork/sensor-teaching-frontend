import { useState } from "react";
import "./FrontPage.css"; // Import the CSS file
import Measurements from "../Measurements/Measurements";
import { SingleMeasurement } from "../../types/types";

// Updated interface to reflect new functionality
type FrontPageProps = {
  onSetupComplete: (
    numStudents: number,
    numGroups: number,
    selectedMeasurements: SingleMeasurement[]
  ) => void;
};

const FrontPage = ({ onSetupComplete }: FrontPageProps) => {
  const [numStudents, setNumStudents] = useState<number>(0);
  const [numGroups, setNumGroups] = useState<number>(0);
  const [selectedMeasurements, setSelectedMeasurements] = useState<
    SingleMeasurement[]
  >([]); // State to keep track of selected measurements

  const handleMeasurementSelect = (measurements: SingleMeasurement[]) => {
    setSelectedMeasurements(measurements);
  };

  const handleButtonClick = () => {
    // Call onSetupComplete with the number of students, number of groups, and selected measurements
    onSetupComplete(numStudents, numGroups, selectedMeasurements);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Call onSetupComplete with just the numbers, not the objects
  //   onSetupComplete(numStudents, numGroups, selectedMeasurements);
  // };

  return (
    <div className="form-container">
      <header className="frontpage-header">
        <h1>Setup of Classroom</h1>
      </header>
      <main className="frontpage-main">
        <div className="frontpage-container">
          <div className="form-field">
            <label>
              Number of Students:
              <input
                type="number"
                value={numStudents}
                onChange={(e) => setNumStudents(parseInt(e.target.value) || 0)}
                min="0"
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Number per group:
              <input
                type="number"
                value={numGroups}
                onChange={(e) => setNumGroups(parseInt(e.target.value) || 0)}
                min="0"
              />
            </label>
          </div>

          {/* Measurements component */}
          <div className="measurement-container-fp">
            <Measurements
              onMeasurementSelect={handleMeasurementSelect}
              selectedMeasurements={selectedMeasurements}
            />
          </div>
          <button onClick={handleButtonClick} className="submit-button">
            Submit groups and measurements
          </button>
        </div>
        <div className="info-box">
          <h2>How to Use</h2>
          <p>
            This dashboard gives an overview of all the students in the class
            and their corresponding state. This is thought to be used as a
            guideline and can be utilized to adapt the teaching method and
            create a greater understanding of the students and how they are
            doing.
          </p>
          <ul>
            <li>
              Each group is clickable, providing more in-depth information.
            </li>
            <li>
              Each measurement is clickable, offering the opportunity to focus
              on certain measurements.
            </li>
            <li>
              The states are continuously rendered and collected, providing
              real-time data.
            </li>
            <li>A group is equal to a table in the classroom.</li>
          </ul>
          <h2>Data Collection & Privacy</h2>
          <p>
            Data is collected through the use of wristbands and webcamera, and
            computed to estimate the students state. This data is handled with
            care, and no personal data is beign shared with unathorized
            entities.
          </p>
        </div>
      </main>
    </div>
  );
};

export default FrontPage;
