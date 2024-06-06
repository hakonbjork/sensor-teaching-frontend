export function useGetMockStudentStates() {
  const getMockStudentStates = async () => {
    const url = "http://127.0.0.1:8000/api/mock-states/";
    const response = await fetch(url);
    return response.json();
  };
  return { getMockStudentStates };
}
