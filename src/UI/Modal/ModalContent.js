import classes from "./ModalContent.module.css";
import { useEffect, useState } from "react";

const ModalContent = ({ handleClick, isHide, Component }) => {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (!isHide) {
      setRefresh(true);
    } else {
      setRefresh(false);
    }
  }, [isHide, refresh]);
  return (
    <div
      className={`${classes.transition} ${
        !refresh ? classes.hide : classes.show
      }`}>
      <Component onClose={handleClick} />
    </div>
  );
};

export default ModalContent;
