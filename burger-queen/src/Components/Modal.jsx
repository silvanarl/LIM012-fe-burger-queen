import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <div>
    <div className="modal-overlay" />
    <div className="modal-wrapper">
      <div className="modal">
        <span className="modal-span">La orden se envió exitosamente.</span>
        <button
          className="modal-close"
          type="button"
          onClick={hide}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>,
  document.getElementById('modal-root'),
)
  : null);

export default Modal;
