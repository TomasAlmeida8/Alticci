import React, { useState } from 'react';
import './App.css';
import NumberInput from './NumberInput';
import Decimal from 'decimal.js';

function formatNumber(numberStr, decimalPlaces = 2) {
  const number = new Decimal(numberStr);

  if (number.isNaN()) {
    return 'Invalid Number';
  }

  if (number.abs().lessThanOrEqualTo(1e9) && number.abs().greaterThan(1e-9)) {
    return number.toString();
  } else {
    return number.toExponential(decimalPlaces);
  }
}

function App() {
  const [result, setResult] = useState('');
  const [showWholeNumber, setShowWholeNumber] = useState(false); // State to control whether to show the whole number
  const [showScientific, setShowScientific] = useState(true); // State to control whether to show scientific notation

  const handleCalculate = (calculatedResult) => {
    setResult(calculatedResult);
    setShowWholeNumber(false); // Reset the showWholeNumber state when a new result is calculated
    setShowScientific(true); // Ensure scientific notation is initially turned on
    console.log('Result in App.js:', calculatedResult);
  };

  // Function to toggle the showWholeNumber state
  const toggleShowWholeNumber = () => {
    setShowWholeNumber(!showWholeNumber);
    setShowScientific(false); // Ensure scientific notation is turned off
  };

  // Function to toggle the showScientific state
  const toggleShowScientific = () => {
    setShowScientific(!showScientific);
    setShowWholeNumber(false); // Ensure whole number is turned off
  };

  const renderWholeNumber = (number) => {
    const chunkSize = 65;
    const chunks = [];
    for (let i = 0; i < number.length; i += chunkSize) {
      chunks.push(number.slice(i, i + chunkSize));
    }
    return chunks.map((chunk, index) => <pre key={index}>{chunk}</pre>);
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
            {showWholeNumber ? (
              renderWholeNumber(result)
            ) : (
              <>
                {showScientific ? (
                  <>
                    <pre>{formatNumber(result)}</pre>
                    <button onClick={toggleShowWholeNumber}>
                      Show Whole Number
                    </button>
                  </>
                ) : (
                  <>
                    <pre>{result}</pre>
                    {result.length >= 10 && (
                      <button onClick={toggleShowScientific}>
                        Show Scientific Notation
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
