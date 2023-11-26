import React, { useEffect, useState } from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false }
];

function App() {
  return (
    <div className='app'>
      {/* <Logo />
      <Form />
      <PackingList />
      <Stats /> */}
      <FlashCards />
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


function Logo() {
  return <h1>🌴 Far Away 💼</h1>
};

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // Date.now().toString().slice(-7);

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity}
        onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Item...' />
      <button>Add</button>
    </form>
  )
};

function PackingList() {

  return (
    <div className="list">
      <ul >
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
};

function Item({ item }) {
  return (
    <li >
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  )
};

function Stats() {
  return (
    <footer className='stats'>
      <em>
        💼 You have X items on your list, and you already packed X (X%)
      </em>
    </footer>
  )
}

export default App