import { useEffect, useState } from "react";
import {
  DBStates,
  StudentStates,
  SingleMeasurement,
  SignallingState,
} from "../../types/types";
import { useGetMockStudentStates } from "../../hooks/useGetMockStudentStates";
import "./Dashboard.css";
import StudentGroup from "../StudentGroup/StudentGroup";
import StudentGroupModal from "../StudentGroupModal/StudentGroupModal";
import InformationModal from "../InformationModal/InformationModal";
import { useGetDBStates } from "../../hooks/useGetDBStates";
import { useGetSignalling } from "../../hooks/useGetSignalling";

type DashboardProps = {
  numGroupSize: number;
  numStudents: number;
  selectedMeasurments: SingleMeasurement[];
};

const Dashboard = ({
  numStudents,
  numGroupSize,
  selectedMeasurments,
}: DashboardProps) => {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [studentGroups, setStudentGroups] = useState<StudentStates[]>([]);

  const { getMockStudentStates } = useGetMockStudentStates();
  const { getDBStates } = useGetDBStates();
  const { getSignalling } = useGetSignalling();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedGroupInfo, setSelectedGroupInfo] =
    useState<StudentStates | null>(null);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number>(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [signallingInfo, setSignallingInfo] = useState<SignallingState>();

  const USE_MOCK_DATA = false;

  const divideStudentsIntoGroups = (students: StudentStates) => {
    const groups: StudentStates[] = [];
    const limitedStudents = students.slice(0, numStudents);
    const groupSize = numGroupSize;
    for (let i = 0; i < limitedStudents.length; i += groupSize) {
      groups.push(limitedStudents.slice(i, i + groupSize));
    }
    return groups;
  };

  const convertDBStatesToList = (dbStates: DBStates): StudentStates =>
    Object.entries(dbStates).map(([id, state]) => ({
      id,
      state,
    }));

  useEffect(() => {
    if (USE_MOCK_DATA) {
      getMockStudentStates().then((response) => {
        setStudentGroups(divideStudentsIntoGroups(response));
      });
    } else {
      getDBStates().then((response) => {
        const studentStates = convertDBStatesToList(response);
        setStudentGroups(divideStudentsIntoGroups(studentStates));
      });
    }
    getSignalling().then((response) => {
      setSignallingInfo(response);
    });

    const sensorDataInterval = setInterval(() => {
      if (USE_MOCK_DATA) {
        getMockStudentStates().then((response) => {
          const studentGroups = divideStudentsIntoGroups(response);
          setStudentGroups(studentGroups);
          if (isModalOpen) {
            setSelectedGroupInfo(studentGroups[selectedGroupIndex]);
          }
        });
      } else {
        getDBStates().then((response) => {
          const studentStates = convertDBStatesToList(response);
          const studentGroups = divideStudentsIntoGroups(studentStates);
          setStudentGroups(studentGroups);
          if (isModalOpen) {
            setSelectedGroupInfo(studentGroups[selectedGroupIndex]);
          }
        });
      }
    }, 1000);

    const signallingDataInterval = setInterval(() => {
      getSignalling().then((response) => {
        setSignallingInfo(response);
      });
    }, 10000); // fetch signalling data every 10 seconds
    return () => {
      clearInterval(sensorDataInterval);
      clearInterval(signallingDataInterval);
    };
  }, [isModalOpen]);

  const handleStudentGroupClick = (
    studentGroup: StudentStates,
    index: number
  ) => {
    setSelectedGroupIndex(index);
    setSelectedGroupInfo(studentGroup);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Smart Classroom A</h1>
        <span className="info-icon" onClick={() => setIsInfoModalOpen(true)}>
          &#x2139;
        </span>
      </header>
      <main className="main-container">
        {/* <div className="measurements">
          <Measurements
            onMeasurementSelect={(measurement) =>
              setSelectedMeasurement(measurement)
            }
            selectedMeasurement={selectedMeasurement}
          />
        </div> */}
        <div className="dashboard-main">
          {studentGroups.map((studentGroup, index) => (
            <div
              className="student-group-wrapper"
              key={`studentGroup:${LETTERS[index]}`}
              onClick={() => handleStudentGroupClick(studentGroup, index)}
            >
              <StudentGroup
                students={studentGroup}
                selectedMeasurements={selectedMeasurments}
                signallingInfo={signallingInfo}
              />
            </div>
          ))}
        </div>
        <StudentGroupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          studentGroup={selectedGroupInfo}
          signallingInfo={signallingInfo}
        />
        <InformationModal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
        />
      </main>
      <footer className="dashboard-footer"></footer>
    </div>
  );
};
export default Dashboard;
