import stressedIcon from "../../assets/stressed_icon.png";
import engagedIcon from "../../assets/engaged_icon.png";
import angryIcon from "../../assets/angry_icon.png";
import fearIcon from "../../assets/fear_icon.png";
import happyIcon from "../../assets/happy_icon.png";
import sadIcon from "../../assets/sad_icon.png";
import surprisedIcon from "../../assets/surprise_icon.png";
import disgustedIcon from "../../assets/disgust_icon.png";
import sensorIssuesIcon from "../../assets/sensor_issues_icon.png";
import { SingleState } from "../../types/types";

export type StudentStateDescription = {
  state: SingleState;
  icon: string;
  description: string;
};

export const studentStateDescriptions: StudentStateDescription[] = [
  {
    state: "stress",
    icon: stressedIcon,
    description: "This person has a high level of stress in the activity",
  },
  {
    state: "engagement",
    icon: engagedIcon,
    description: "This person has a high level of engagement in the activity",
  },
  {
    state: "angry",
    icon: angryIcon,
    description: "This person has a high level of anger in the activity",
  },

  {
    state: "fear",
    icon: fearIcon,
    description: "This person has a high level of fear in the activity",
  },

  {
    state: "happy",
    icon: happyIcon,
    description:
      "This person has a high level of happiness during the activity",
  },
  {
    state: "sad",
    icon: sadIcon,
    description: "This person has a high level of sadness during the activity",
  },
  {
    state: "surprise",
    icon: surprisedIcon,
    description:
      "This person is experiencing beign surprised during the activity",
  },
  {
    state: "disgust",
    icon: disgustedIcon,
    description:
      "This person is experiencing beign disgusted during the activity",
  },
  {
    state: "sensor issues",
    icon: sensorIssuesIcon,
    description:
      "This person is having some technical issues that require assistance",
  },
];
