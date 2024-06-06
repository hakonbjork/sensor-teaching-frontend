// StudentGroupModal.tsx
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  SignallingState,
  SingleMeasurement,
  StudentStates,
} from "../../types/types";
import "./StudentGroupModal.css"; // Import the CSS file here

interface StudentGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentGroup: StudentStates | null;
  signallingInfo: undefined | SignallingState;
}

const StudentGroupModal = ({
  isOpen,
  onClose,
  studentGroup,
  signallingInfo,
}: StudentGroupModalProps) => {
  const allMeasurements: SingleMeasurement[] = [
    "stress",
    "engagement",
    "angry",
    "fear",
    "happy",
    "sad",
    "surprise",
    "disgust",
  ];

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="student-group-modal-title"
      aria-describedby="student-group-modal-description"
    >
      <Box className="group-modal-content">
        <h2 id="student-group-modal-title" className="modal-title">
          Student Group Information
        </h2>
        <div className="modal-body">
          {studentGroup &&
            studentGroup.map((student, _) => (
              <div key={student.id} className="student-modal">
                <h3>{`Student ${student.id}`}</h3>
                {signallingInfo &&
                  allMeasurements.map((measurement) => (
                    <div key={`signalling-info:${student.id}:${measurement}`}>
                      {signallingInfo[student.id][measurement]
                        ? `🔴 ${measurement}`
                        : `🟢 ${measurement}`}
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </Box>
    </Modal>
  );
};

export default StudentGroupModal;
