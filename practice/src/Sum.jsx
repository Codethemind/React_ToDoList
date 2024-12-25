import React, { useState } from 'react';

function Sum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <h1>Sum of Two Numbers</h1>
      
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />

      <button onClick={handleSum}>Show Sum</button>

      <p>Sum: {sum}</p>
    </div>
  );
}

export default Sum;
