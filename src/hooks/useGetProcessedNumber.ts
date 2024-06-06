export function useGetProcessedNumber() {
  const getProcessedNumber = async () => {
    const url = "http://127.0.0.1:8000/api/number/";
    const response = await fetch(url);
    return response.json();
  };

  return { getProcessedNumber };
}
