import "./Measurements.css";
import { SingleMeasurement } from "../../types/types";
import MeasurementGroup from "../MeasurementGroup/MeasurementGroup";

type MeasurementsProps = {
  onMeasurementSelect: (measurement: SingleMeasurement[]) => void;
  selectedMeasurements: SingleMeasurement[];
};
const Measurements = ({
  onMeasurementSelect,
  selectedMeasurements,
}: MeasurementsProps) => {
  const measurements: SingleMeasurement[] = [
    "stress",
    "engagement",
    "angry",
    "fear",
    "happy",
    "sad",
    "surprise",
    "disgust",
  ];

  const isAnySelected = selectedMeasurements !== null;

  const toggleMeasurementSelection = (measurement: SingleMeasurement) => {
    if (selectedMeasurements.includes(measurement)) {
      onMeasurementSelect(
        selectedMeasurements.filter((m) => m !== measurement)
      );
    } else {
      onMeasurementSelect([...selectedMeasurements, measurement]);
    }
  };

  return (
    <div className="measurement-container">
      <header className="measurement-header">
        <h1>Measurements</h1>
      </header>
      <div className="measurement-icon-container">
        {measurements.map((measurementType, index) => (
          <MeasurementGroup
            key={`measurementType:${index + 1}`}
            measurementType={measurementType}
            isSelected={selectedMeasurements.includes(measurementType)}
            isAnySelected={isAnySelected}
            onClick={() => toggleMeasurementSelection(measurementType)}
          />
        ))}
      </div>
    </div>
  );
};

export default Measurements;
