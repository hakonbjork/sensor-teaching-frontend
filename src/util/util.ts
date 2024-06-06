import { StudentState } from "../types/types";

export const extractActiveStates = (studentState: StudentState) => {
  const trueStates: (keyof StudentState)[] = [];

  // need to use keyof in this function to get TS to understand that the returned list
  // will be keys from SingleMeasurement, so they can be used later as keys in studentStateIcon
  (Object.entries(studentState) as [keyof StudentState, boolean][]).forEach(
    ([state, value]) => {
      if (value) {
        trueStates.push(state);
      }
    }
  );

  return trueStates;
};
