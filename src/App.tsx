import React from 'react';
import './App.css';
import {AComponent} from './Component/AComponent';

interface LakerPlayerProps {
  value: string;
  number: number;
}


const renderOption = (item: LakerPlayerProps) => {
  return (
    <>
      <h2>Name: {item.value}</h2>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <AComponent renderOption={renderOption} />
    </div>
  );
}

export default App;
