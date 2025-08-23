import React, { useState } from 'react';
import "./styles/main.scss";
import Button from './components/Button';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Welcome to Apartment Maintenance App</h1>
      <p>you clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)} label="Click Me" disabled={false}/>
      <Button label="Disable button" onClick={() => alert("This should not run")} disabled />

    </div>
  );
}

export default App;
