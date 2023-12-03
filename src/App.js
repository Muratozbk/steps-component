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
      {/* <TipCalc /> */}
    </div>
  )
};

function TipCalc() {
  const [bill, setBill] = useState("");
  const [perctip1, setPercTip1] = useState(0);
  const [perctip2, setPercTip2] = useState(0);
  const tip = Math.floor(bill * ((perctip1 + perctip2) / 2 / 100));

  function handleReset() {
    setBill('');
    setPercTip1(0)
    setPercTip2(0)
  }

  return (
    <div >
      <p>Tip Calculator</p>
      <label>How much was the bill?</label>
      <input type="number"
        value={bill}
        onChange={e => setBill(+e.target.value)} />
      <SelectPercentage percentage={perctip1} onSelect={setPercTip1}>
        how did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={perctip2} onSelect={setPercTip2}>
        how did your friend like the service?
      </SelectPercentage>

      {bill && (
        <>
          <p></p>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>

  )
};

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">amazing! (20%)</option>
      </select>
    </div>
  )
};
function Output({ bill, tip }) {
  return (
    <h3>You pay ${tip + bill} (${bill} + ${tip} tip )</h3>
  )
};

function Reset({ onReset }) {
  return (
    <button onClick={onReset}>Reset</button>
  )

}

export default App

