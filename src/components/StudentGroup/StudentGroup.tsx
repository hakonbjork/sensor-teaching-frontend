import {
  SignallingState,
  SingleMeasurement,
  StudentStates,
} from "../../types/types";
import Student from "../Student/Student";
import "./StudentGroup.css";

type StudentGroupProps = {
  students: StudentStates;
  selectedMeasurements: SingleMeasurement[];
  signallingInfo: undefined | SignallingState;
};

const StudentGroup = ({
  students,
  selectedMeasurements, // TODO: use this
  signallingInfo,
}: StudentGroupProps) => {
  // count how many "trues" there are in a group, aka how many measurements need attention
  const countTrueGroupStates = (signallingState: SignallingState) => {
    const studentIds = students.map((student) => student.id);
    const filteredSignallingState = Object.keys(signallingState)
      .filter((key) => studentIds.includes(key)) // filter out students not in group
      // use reduce to convert  the array back to SignallingState object
      .reduce((obj, key) => {
        obj[key] = signallingState[key];
        return obj;
      }, {} as SignallingState);

    // count the true states
    let count = 0;
    Object.values(filteredSignallingState).forEach((studentSignallingState) => {
      Object.values(studentSignallingState).forEach((value) => {
        if (value) count++;
      });
    });
    return count;
  };

  // format css classnames based on count
  const trueStateCount = signallingInfo
    ? countTrueGroupStates(signallingInfo)
    : 0;
  const signalColor =
    trueStateCount > 6 ? "red" : trueStateCount > 4 ? "orange" : "";

  return (
    <div className={"student-group-container"}>
      <p>Table {students[0].id[0]}</p>
      <div className={`student-group ${signalColor}`}>
        {students.map((student, _) => {
          return (
            <div className="studentgroup-student-container" key={student.id}>
              <p>{student.id}</p>
              <Student
                studentSignallingState={
                  signallingInfo ? signallingInfo[student.id] : undefined
                }
              />
              <div className="signalling-info">
                {signallingInfo &&
                  selectedMeasurements.map((measurement) => (
                    <div key={`signalling-info:${student.id}:${measurement}`}>
                      {signallingInfo[student.id][measurement]
                        ? `🔴 ${measurement}`
                        : `🟢 ${measurement}`}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentGroup;
