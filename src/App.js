import Modal from "./Modal";
import { useState } from "react";

const Com = () => {
  return <h1>djfhdjhfjdhf</h1>;
};
const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <Modal active={modalActive} setActive={setModalActive} Component={Com} />
  );
};

export default App;
