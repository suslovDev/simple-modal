import Modal from "./UI/Modal/Modal";
import { useState } from "react";
import ClickToXHide from "./examples/ClickToXHide";
import ClickToItself from "./examples/ClickToItself";

function App() {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleCloseOne = () => {
    setIsOpenOne(false);
  };
  const handleCloseTwo = () => {
    setIsOpenTwo(false);
  };

  const handleOpenModalOne = () => {
    setIsOpenOne(true);
  };
  const handleOpenModalTwo = () => {
    setIsOpenTwo(true);
  };

  return (
    <div>
      <h1>Few examples of using my modal)</h1>
      <button onClick={handleOpenModalOne}>
        Open a Modal that closes when 'X' is clicked
      </button>
      <button onClick={handleOpenModalTwo}>
        Open a Modal that closes when itself is cliced
      </button>
      {isOpenOne && <Modal onClose={handleCloseOne} Component={ClickToXHide} />}
      {isOpenTwo && (
        <Modal onClose={handleCloseTwo} Component={ClickToItself} />
      )}
    </div>
  );
}

export default App;
