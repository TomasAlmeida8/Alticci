// App.js
import React, { useState } from 'react';
import './App.css';
import NumberInput from './NumberInput';

function formatNumber(number) {
  const numberStr = number.toString();
  const chunks = [];
  const chunkSize = 20; // You can adjust this value to fit your layout

  for (let i = 0; i < numberStr.length; i += chunkSize) {
    chunks.push(numberStr.substring(i, i + chunkSize));
  }

  return chunks.join('\n');
}

function App() {
  const [result, setResult] = useState('');

  const handleCalculate = (calculatedResult) => {
    setResult(calculatedResult);
    console.log('Result in App.js:', calculatedResult); // Log the result
  };

  return (
    <div className="App">
      <h1>Alticci Number Calculator</h1>
      <NumberInput onCalculate={handleCalculate} />
      {result !== '' && (
        <div>
          <h2>Result:</h2>
          <pre>{formatNumber(result)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
