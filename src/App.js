import { useState, useEffect } from "react";
let start = 0;
let end = 0;
let step = 10;

const App = () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }

  const [currentSlice, setCurrentSlice] = useState(arr);
  const [step, setStep] = useState(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(step);

  useEffect(() => {
    setCurrentSlice(arr.slice(start, end));
  }, [start, end, step]);

  const handleNext = () => {
    setStart((prev) => prev + step);

    setEnd((prev) => prev + step);
  };

  const handleSetStep = () => {
    setStep(step+1);
  };

  return (
    <>
      <button onClick={handleNext}>Next Slice</button>
      <button onClick={handleSetStep}>Add shown elements</button>
      {currentSlice.map((item) => (
        <h2>{item}</h2>
      ))}
    </>
  );
};

export default App;
