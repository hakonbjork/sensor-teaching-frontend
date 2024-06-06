export function useGetNewestClickstreamSentence() {
  const getNewestClickstreamSentence = async () => {
    const url = "http://127.0.0.1:8000/api/clickstream/";
    const response = await fetch(url);
    return response.json();
  };

  return { getNewestClickstreamSentence };
}
