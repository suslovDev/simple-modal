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
      <h1>Few examples of using my modal)</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && <Modal onClose={handleClose} name='Example_1' />}
    </div>
  );
}

export default App;
