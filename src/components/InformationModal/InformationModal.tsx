// InfoModal.tsx
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./InformationModal.css"; // Import the CSS file here, make sure to create one
import StudentStateInfo from "../StudentStateInfo/StudentStateInfo";

type InfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const InformationModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="information-modal-title"
      aria-describedby="information-modal-description"
    >
      <Box
        className="modal-content"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        <IconButton onClick={onClose} className="modal-close-button">
          <CloseIcon />
        </IconButton>
        {}
        <StudentStateInfo />
      </Box>
    </Modal>
  );
};

export default InformationModal;
