import { useState, useEffect } from "react";
import ModalContent from "./ModalContent";

const Modal = ({ children, onClose }) => {
  const [isCliced, setIsClicked] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (isCliced) {
      setIsHide(true);
      const timer = setTimeout(() => {
        onClose();
      }, 2000); //set delay like in fade animation in css
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCliced, isHide, onClose]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <ModalContent
      nestedContent={children}
      handleClick={handleClick}
      isHide={isHide}
    />
  );
};

export default Modal;
