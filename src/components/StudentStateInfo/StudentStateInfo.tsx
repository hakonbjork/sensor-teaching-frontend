import { studentStateDescriptions } from "./StudentStateDescription"; // Use the correct relative path
import "./StudentStateInfo.css";

const StudentStateInfo: React.FC = () => {
  return (
    <div className="student-states-info-container">
      <h1>State explanation</h1>
      {studentStateDescriptions.map(({ state, description }) => (
        <div key={state} className="student-state-info">
          <div className="student-state-text">
            <strong>{state.charAt(0).toUpperCase() + state.slice(1)}:</strong>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentStateInfo;
