// App.js
import React, { useState } from 'react';
import './App.css';
import NumberInput from './NumberInput';

// Function to format a number with line breaks
function formatNumber(number) {
  const numberStr = number.toString();
  const chunks = [];
  const chunkSize = 65; // You can adjust this value to fit your layout

  for (let i = 0; i < numberStr.length; i += chunkSize) {
    chunks.push(numberStr.substring(i, i + chunkSize));
  }

  return chunks.join('\n');
}

function App() {
  // State for the calculated result
  const [result, setResult] = useState('');

  // Function to handle the calculation result
  const handleCalculate = (calculatedResult) => {
    setResult(calculatedResult);
    console.log('Result in App.js:', calculatedResult); // Log the result
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alticci Number Calculator</h1>
      </header>
      <main className="App-main">
        <NumberInput onCalculate={handleCalculate} />
        {result !== '' && (
          <div className="Result">
            <h2>Result:</h2>
            <pre>{formatNumber(result)}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
