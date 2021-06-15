import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay" onClick={ onClose }></div>
      <div className="modal">
        {children}
      </div>
      
    </div>,
    document.getElementById("modal-portal")
  );
};

export default Modal;