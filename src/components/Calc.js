import React, { useState } from 'react';
import './Calc.css';

export const Calc = () => {
  const [result, setResult] = useState('');
  const operators = ['+', '-', '*', '/', '.'];

  const EventHandler = value => {
    if ((operators.includes(value) && result === '') || (operators.includes(value) && operators.includes(result.slice(-1)))) {
      return;
    }
    setResult(result + value);
  };

  const deletion = () => {
    setResult(result.slice(0, -1));
  };

  const clear = () => {
    setResult('');
  };

  const calculation = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="calc d-flex justify-content-center align-items-center h-100">
      <div className="calc-content w-25">
        <div className="screen d-flex align-items-center justify-content-end">{result || '0'}</div>
        <div className="controls">
          <div className="numbers">
            <button onClick={() => EventHandler('7')}>7</button>
            <button onClick={() => EventHandler('8')}>8</button>
            <button onClick={() => EventHandler('9')}>9</button>
            <button onClick={() => deletion()} className="del-reset-btns">
              del
            </button>
            <button onClick={() => EventHandler('4')}>4</button>
            <button onClick={() => EventHandler('5')}>5</button>
            <button onClick={() => EventHandler('6')}>6</button>
            <button onClick={() => EventHandler('+')}>+</button>
            <button onClick={() => EventHandler('1')}>1</button>
            <button onClick={() => EventHandler('2')}>2</button>
            <button onClick={() => EventHandler('3')}>3</button>
            <button onClick={() => EventHandler('-')}>-</button>
            <button onClick={() => EventHandler('.')}>.</button>
            <button onClick={() => EventHandler('0')}>0</button>
            <button onClick={() => EventHandler('/')}>/</button>
            <button onClick={() => EventHandler('*')}>x</button>
          </div>
          <div className="last-col">
            <button onClick={() => clear()} className="del-reset-btns">
              reset
            </button>
            <button onClick={() => calculation()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
