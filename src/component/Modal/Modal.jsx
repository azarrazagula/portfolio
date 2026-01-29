import React, { useState } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 lg:p-24"
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`z-50 bg-white text-textcolor rounded-lg w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 ${props.isClosing ? "animate-top-close" : "animate-top"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.onClose();
    }, 500);
  };

  return ReactDOM.createPortal(
    <Backdrop onClose={handleClose}>
      <ModalOverlay isClosing={isClosing}>{props.children}</ModalOverlay>
    </Backdrop>,
    document.getElementById("overlays"),
  );
};

export default Modal;
