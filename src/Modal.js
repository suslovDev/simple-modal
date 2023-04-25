import styles from "./Modal.module.css";
import { useRef, useEffect } from "react";

const Modal = ({ active, setActive, Component }) => {
  const modalRef = useRef();
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, [handleEsc]);

  return (
    <div
      ref={modalRef}
      className={`${styles.modal} ${active ? styles.active : ""}`}
      onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Component />
      </div>
    </div>
  );
};

export default Modal;
