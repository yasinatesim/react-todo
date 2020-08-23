import React, { useState } from 'react';

// Containers
import Items from './containers/items';

// Components
import Form from './components/form';
import NotFound from './components/not-found';

// Styles
import './App.css';

function App() {
  const [items, setItem] = useState([]);
  const [label, setLabel] = useState('');

  const add = (e) => {
    e.preventDefault();

    if (label.length > 0) {
      setItem([...items, { label, completed: false }]);
      setLabel('');
    }
  };

  const remove = (index) => {
    const newItems = items.filter((i, k) => k !== index);

    setItem(newItems);
  };

  const completed = (index) => {
    const item = items[index];
    item.completed = !item.completed;

    setItem([...items]);
  };

  return (
    <div className="container">
      {/* Not Found */}
      {items.length < 1 ? (
        <NotFound />
      ) : (
        /* Not Found */
        <Items
          items={items}
          remove={(itemIndex) => remove(itemIndex)}
          completed={(itemIndex) => completed(itemIndex)}
        />
      )}

      <Form add={(e) => add(e)} label={label} setLabel={(value) => setLabel(value)} />
    </div>
  );
}

export default App;
