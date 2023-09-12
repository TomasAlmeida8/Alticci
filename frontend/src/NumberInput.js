import React, { useState } from 'react';

function NumberInput({ onCalculate }) {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);

  const handleNumberChange = (event) => {
    const inputNumber = event.target.value;
    setNumber(inputNumber);

    if (!Number.isInteger(parseFloat(inputNumber))) {
      setError('Please enter a whole number');
    } else {
      setError(null); // Clear the error if it's a whole number
    }
  };

  const handleCalculate = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setError(null); // Clear any previous errors

    // Validate the input
    if (!Number.isInteger(parseFloat(number))) {
      setError('Please enter a whole number');
      return;
    }

    fetch(`http://localhost:8080/alticci/${number}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Parse the response as text
      })
      .then((data) => {
        onCalculate(data); // Pass the result (string) to the parent component
        console.log('Result from API:', data); // Log the result
      })
      .catch((error) => {
        setError(error.message); // Handle and display the error
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleCalculate}>
      <input
        type="text"
        placeholder="Enter a whole number"
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Calculate</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default NumberInput;
