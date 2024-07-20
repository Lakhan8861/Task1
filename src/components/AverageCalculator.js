// src/components/AverageCalculator.js
import React, { useState } from 'react';
import { fetchNumbers } from '../services/api';

const AverageCalculator = () => {
  const [type, setType] = useState('e');
  const [response, setResponse] = useState(null);

  const handleFetchNumbers = async () => {
    const data = await fetchNumbers(type);
    if (data) {
      setResponse(data);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <label>
          Select Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="p">Prime</option>
            <option value="f">Fibonacci</option>
            <option value="e">Even</option>
            <option value="r">Random</option>
          </select>
        </label>
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      {response && (
        <div>
          <h2>Response</h2>
          <p><strong>Previous State:</strong> {JSON.stringify(response.windowPrevState)}</p>
          <p><strong>Current State:</strong> {JSON.stringify(response.windowCurrState)}</p>
          <p><strong>Numbers:</strong> {JSON.stringify(response.numbers)}</p>
          <p><strong>Average:</strong> {response.avg}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;