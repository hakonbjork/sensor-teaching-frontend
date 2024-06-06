import stressedIcon from "../../assets/stressed_icon.png";
import engagedIcon from "../../assets/engaged_icon.png";
import angryIcon from "../../assets/angry_icon.png";
import feearIcon from "../../assets/fear_icon.png";
import happyIcon from "../../assets/happy_icon.png";
import sadIcon from "../../assets/sad_icon.png";
import surprisedIcon from "../../assets/surprise_icon.png";
import disgustedIcon from "../../assets/disgust_icon.png";
import { SingleMeasurement } from "../../types/types";
import "./MeasurementGroup.css";

type MeasurementProps = {
  measurementType: SingleMeasurement;
  isSelected: boolean;
  isAnySelected: boolean; // Add a prop to indicate if any measurement is selected, currently not in use, might add later
  onClick: () => void;
};

const MeasurementGroup: React.FC<MeasurementProps> = ({
  measurementType,
  isSelected,
  isAnySelected,
  onClick,
}: MeasurementProps) => {
  const measurementIcon = {
    stress: stressedIcon,
    engagement: engagedIcon,
    angry: angryIcon,
    fear: feearIcon,
    happy: happyIcon,
    sad: sadIcon,
    surprise: surprisedIcon,
    disgust: disgustedIcon,
  };

  const className = isSelected
    ? `measurement-group measurement-selected-${measurementType}`
    : isAnySelected
    ? "measurement-group "
    : "measurement-group ";

  return (
    <div className={className} onClick={onClick}>
      <img
        className="measurement-icon"
        src={measurementIcon[measurementType]}
        alt={measurementType}
      />
      <p className="measurement-text">{measurementType}</p>
    </div>
  );
};

export default MeasurementGroup;
