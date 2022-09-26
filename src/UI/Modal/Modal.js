import { useState, useEffect } from "react";
import ModalContent from "./ModalContent";

const Modal = ({ children, onClose }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setIsHide(true);
      const timer = setTimeout(() => {
        onClose();
      }, 2000); //set delay like in fade animation in css
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isClicked, isHide, onClose]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <ModalContent
      handleClick={handleClick}
      isHide={isHide}
    />
  );
};

export default Modal;
