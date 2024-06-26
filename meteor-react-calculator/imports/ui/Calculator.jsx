import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('+')}>+</button>
      <br />
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <br />
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('*')}>*</button>
      <br />
      <button onClick={() => handleClick('C')}>C</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('=')}>=</button>
      <button onClick={() => handleClick('/')}>/</button>
      <br />
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;