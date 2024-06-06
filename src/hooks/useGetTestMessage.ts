export function useGetTestMessage() {
  const getTestMessage = async () => {
    const url = "http://127.0.0.1:8000/api/hello-world/";
    const response = await fetch(url);
    return response.json();
  };

  return { getTestMessage };
}
