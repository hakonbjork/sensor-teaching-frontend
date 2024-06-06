import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage/FrontPage"; // Adjust path as necessary
import initFirebase from "./util/firebase";
import { SingleMeasurement } from "./types/types";

const App = () => {
  const [setupComplete, setSetupComplete] = useState(false);
  const [numStudents, setNumStudents] = useState(0);
  const [numGroupSize, setGroupSize] = useState(0);
  const [selectedMeasurements, setSelectedMeasurements] = useState<
    SingleMeasurement[]
  >([]);

  const handleSetupComplete = (
    students: number,
    groups: number,
    selectedMeasurements: SingleMeasurement[]
  ) => {
    setNumStudents(students);
    setGroupSize(groups);
    setSelectedMeasurements(selectedMeasurements);
    initFirebase(); // Initialize Firebase
    setSetupComplete(true);
  };

  // Conditionally render FrontPage or Dashboard
  return (
    <>
      {!setupComplete ? (
        <FrontPage onSetupComplete={handleSetupComplete} />
      ) : (
        <>
          <Dashboard
            numStudents={numStudents}
            numGroupSize={numGroupSize}
            selectedMeasurments={selectedMeasurements}
          />
        </>
      )}
    </>
  );
};

export default App;
