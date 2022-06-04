import Modal from "react-modal";
import { CharacterInterface } from "../../types/store/characters";
import {ReactComponent as Exit} from "../../assets/icons/exit.svg";
import React from "react";

Modal.setAppElement("#root");

interface OverlayProps {
  isOpen: boolean;
  info: CharacterInterface;
  hideModal: () => void;
}

const OverlayInfo: React.FC<OverlayProps> = ({ isOpen, info, hideModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 10,
        },
        content: {
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          flexDirection: "column",
          justifyContent: "center",
          border: "none",
          background: "#6877E5",
          height: "300px",
          minWidth: "500px",
          color: " #A9D3E9",
        },
      }}
    >
      <div className="modal__title">
        <h2>{info.name}</h2>
        <Exit onClick={hideModal}/>
      </div>
      <div className="modal__profile">
        <div className="modal__image">
          <img src={info.image} alt={info.name}/>
          <p className="">Status: {info.status}</p>
        </div>
        <div className="modal__additional-info">
          <p className="">Gender: {info.gender}</p>
          <p className="">Species: {info.species}</p>
          <p className="">Location: {info?.location?.name}</p>
        </div>
      </div>
    </Modal>
  );
};
export default OverlayInfo;
