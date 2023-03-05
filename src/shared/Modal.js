import React, { useEffect } from 'react';
import '../styles/Modal.css';

/**
 * Shared modal component
 */
function Modal({ show, onClose, imageUrl }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <img src={imageUrl} alt="Book Cover" />
      </div>
    </div>
  );
}

export default Modal;