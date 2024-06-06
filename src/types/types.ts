export type SingleState =
  | "stress"
  | "engagement"
  | "neutral"
  | "angry"
  | "fear"
  | "happy"
  | "sad"
  | "surprise"
  | "disgust"
  | "sensor issues";

export type SingleMeasurement =
  | "stress"
  | "engagement"
  | "angry"
  | "fear"
  | "happy"
  | "sad"
  | "surprise"
  | "disgust";

export type StudentState = {
  stress: boolean;
  engagement: boolean;
  neutral: boolean;
  angry: boolean;
  fear: boolean;
  happy: boolean;
  sad: boolean;
  surprise: boolean;
  disgust: boolean;
};

export type StudentSignallingState = {
  stress: boolean;
  engagement: boolean;
  neutral: boolean;
  angry: boolean;
  fear: boolean;
  happy: boolean;
  sad: boolean;
  surprise: boolean;
  disgust: boolean;
};

export type DBStates = { [id: string]: StudentState };

export type StudentStates = { id: string; state: StudentState }[];

export type SignallingState = { [id: string]: StudentSignallingState };
