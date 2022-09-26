import classes from "./ClickToItself.module.css";

const ClickToItself = ({ onClose }) => {
  return (
    <div className={classes.modal} onClick={onClose}>
      <div className={classes.modal___head}>
        <h3>Modal</h3>
        {/*  <div onClick={onClose}>X</div> - so in the first example*/}
        <div>X</div>
      </div>
      <div>
        Example_2. Click on This Component (anywhere) to close the Modal
      </div>
    </div>
  );
};

export default ClickToItself;
