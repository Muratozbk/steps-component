import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💲",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <Counter />
    </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date('november 23 2023');
  date.setDate(date.getDate() + count)

  return (
    <div className="steps" >
      <div className="top" style={{ display: 'flex' }}>
        <button className="minus"
          onClick={() => step > 1 && setStep(step - 1)}>-</button>
        <h3>Step: {step}  </h3>
        <button className="plus"
          onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="bottom" style={{ display: 'flex', marginTop: '1rem' }}>
        <button className="plus"
          onClick={() => setCount(count - step)}>-</button>
        <h3>Count: {count}  </h3>
        <button onClick={() => setCount(c => c + step)} className="plus">+</button>
      </div>

      <p>
        <span>{count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span> </p>
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    };
  };

  return (
    <div>
      <button onClick={() => setIsOpen((isOpn) => !isOpn)}
        className="close">&times;</button>

      {isOpen &&
        <div className="steps" >
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]} </p>

          <div className="buttons">
            <button onClick={handlePrevious} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Previous</button>
            <button onClick={handleNext} style={{ backgroundColor: '#7950f2', color: '#fff' }}>
              Next</button>

          </div>
        </div>}
    </div>
  );
};
