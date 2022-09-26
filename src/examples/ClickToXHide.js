import classes from "./ClickToXHide.module.css";

const ClickToXHide = ({ onClose }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal___head}>
        <h3>Modal</h3>
        <div onClick={onClose}>X</div>
      </div>
      <div>Example_1. Click on 'X' to close the Modal</div>
    </div>
  );
};

export default ClickToXHide;
