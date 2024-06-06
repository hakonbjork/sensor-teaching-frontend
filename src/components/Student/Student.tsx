import studentIcon from "../../assets/male_student.png";
import { StudentSignallingState } from "../../types/types";
import "./Student.css";

type StudentProps = {
  studentSignallingState?: StudentSignallingState;
};

const Student = ({ studentSignallingState }: StudentProps) => {
  const countTrueStudentStates = (
    studentSignallingState: StudentSignallingState
  ) => {
    let count = 0;
    Object.values(studentSignallingState).forEach((value) => {
      if (value) count++;
    });
    return count;
  };

  const trueStateCount = studentSignallingState
    ? countTrueStudentStates(studentSignallingState)
    : 0;

  const signalColor = trueStateCount > 2 ? "red" : "";

  return (
    <div className={`student-container ${signalColor}`}>
      <img className="student-icon" src={studentIcon} alt="Student" />
    </div>
  );
};

export default Student;
