import React, { useState } from 'react'
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 6, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true }
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  };
  function handleClearList() {
    if (window.confirm('Are you sure you want to delete all items'))
      setItems([])
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ?
          { ...item, packed: !item.packed } : item));
  };

  return (
    <div className='app' style={{ textAlign: 'center' }}>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList} />
      <Stats items={items} />
      {/* <FlashCards />
      <Counter /> */}
    </div>
  )
};

export default App

/*
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("november 26 2023");
  date.setDate(date.getDate() + count);
  function reset() {
    setStep(1)
    setCount(0)
  };

  return (
    <div>
      <div>
        <input type="range" min={1} max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))} />
        <span>Step: {step} </span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count} onChange={(e) => setCount(+e.target.value)} />
        <button onClick={() => setCount(c => c + step)} >+</button>
      </div>
      <p>
        <span>
          {count === 0 ? "Today is " :
            count > 0 ? `${count} days from today is ` :
              `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()} </span>

      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}

    </div>
  )
};

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', padding: '1rem' }}>
    {questions.map((question) => (
      <div key={question.id} style={{ border: '1px black solid', padding: '10px', cursor: 'pointer' }}
        onClick={() => handleClick(question.id)}>

        <p >{question.id === selectedId ? question.answer : question.question} </p>
      </div>
    ))}
  </div>;
}
*/