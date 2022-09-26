import Modal from "./UI/Modal/Modal";
import { useState } from "react";
import ClickToXHide from "./examples/ClickToXHide";
import ClickToItself from "./examples/ClickToItself";
import ClickToButtonHide from "./examples/ClickToButtonHide";

function App() {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const handleCloseOne = () => {
    setIsOpenOne(false);
  };
  const handleCloseTwo = () => {
    setIsOpenTwo(false);
  };
  const handleCloseThree = () => {
    setIsOpenThree(false);
  };

  const handleOpenModalOne = () => {
    setIsOpenOne(true);
  };
  const handleOpenModalTwo = () => {
    setIsOpenTwo(true);
  };
  const handleOpenModalThree = () => {
    setIsOpenThree(true);
  };

  return (
    <div>
      <h1>Few examples of using my modal)</h1>
      <h3>Try from left to right and see the code</h3>
      <button onClick={handleOpenModalOne}>
        Open a Modal that closes when 'X' is clicked
      </button>
      <button onClick={handleOpenModalTwo}>
        Open a Modal that closes when itself is clicked
      </button>
      <button onClick={handleOpenModalThree}>
        Open a Modal that closes when button is clicked
      </button>
      <button onClick={handleCloseThree}>Button</button>
      {isOpenOne && <Modal onClose={handleCloseOne} Component={ClickToXHide} />}
      {isOpenTwo && (
        <Modal onClose={handleCloseTwo} Component={ClickToItself} />
      )}
      {isOpenThree && (
        <Modal onClose={handleCloseThree} Component={ClickToButtonHide} />
      )}
    </div>
  );
}

export default App;
