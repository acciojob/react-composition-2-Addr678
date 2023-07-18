
import React from "react";
import "./../styles/App.css";

const Modal = ({ show, onClose, children }) => {
  return (
    <div className={`modal-overlay ${show ? "show" : ""}`}>
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <p className="modal-p">Modal Content</p>
      </Modal>
    </div>
  );
};

export default App;
