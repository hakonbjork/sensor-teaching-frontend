import { child, get, getDatabase, ref } from "firebase/database";

export function useGetSignalling() {
  const getSignalling = async () => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `signalling-data`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  };
  return { getSignalling };
}
