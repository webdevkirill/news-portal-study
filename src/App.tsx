import { useState } from 'react';

import './Counter.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
