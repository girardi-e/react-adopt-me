import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// where the modal will be rendered
const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  //useRef is a container for states that you want to survive render cycles
  const elRef = useRef(null);

  if (!elRef.current) {
    //create a div that will not need to be rerendered
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //insert div into the DOM
    modalRoot.appendChild(elRef.current);

    //clean up the div once after it's done
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
