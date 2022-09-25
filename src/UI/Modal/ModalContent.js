import classes from "./ModalContent.module.css";
import { useEffect, useState } from "react";

const ModalContent = ({ nestedContent, handleClick, isHide }) => {
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
      onClick={handleClick}
      className={`${classes.transition} ${!refresh ? classes.hide : classes.show}`}>
      {nestedContent}
    </div>
  );
};

export default ModalContent;
