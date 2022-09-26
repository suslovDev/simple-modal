import classes from "./ModalContent.module.css";
import { useEffect, useState } from "react";
import ClickToXHide from "../../examples/ClickToXHide";

const ModalContent = ({ handleClick, isHide }) => {
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
      <ClickToXHide onClose={handleClick} />
    </div>
  );
};

export default ModalContent;
