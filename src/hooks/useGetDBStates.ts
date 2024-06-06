import { child, get, getDatabase, ref } from "firebase/database";

export function useGetDBStates() {
  const getDBStates = async () => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `sensor-data`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  };
  return { getDBStates };
}
