import Modal from "./UI/Modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <h1>It Work!</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && (
        <Modal onClose={handleClose}>
          {/* just one prop 'onClose' to change state for conditional render the Modal */}
          <h1>I am example modal! (there can be any component...)</h1>
        </Modal>
      )}
    </div>
  );
}

export default App;
