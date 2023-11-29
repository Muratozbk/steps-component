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
    </div>
  )
};

export default App

