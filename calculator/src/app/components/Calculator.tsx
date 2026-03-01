"use client";

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<string | null>(null);

  const inputDigit = (digit: string) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperator = (nextOperator: string) => {
    setOperator(nextOperator);
    setFirstOperand(displayValue);
    setDisplayValue('0');
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  const performCalculation = () => {
    if (operator && firstOperand) {
      const num1 = parseFloat(firstOperand);
      const num2 = parseFloat(displayValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setOperator(null);
      setFirstOperand(null);
    }
  };

  return (
    <div className="flex flex-col bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-6 w-full relative overflow-hidden">
      {/* Decorative gradient orb behind the calculator */}
      <div className="absolute top-0 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Calculator Display */}
      <div className="relative z-10 w-full bg-black/40 border border-white/10 rounded-2xl h-24 mb-6 flex flex-col items-end justify-center p-4 shadow-inner">
        <div className="text-gray-400 text-sm h-5 font-mono">
          {firstOperand != null && operator ? `${firstOperand} ${operator}` : ''}
        </div>
        <div className="text-white text-4xl tracking-wider font-light font-mono truncate w-full text-right" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
          {displayValue}
        </div>
      </div>

      {/* Calculator Buttons */}
      <div className="relative z-10 grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <button className="col-span-2 bg-rose-500/20 hover:bg-rose-500/40 border border-rose-500/30 text-rose-200 active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-lg shadow-lg" onClick={clearDisplay}>AC</button>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-lg shadow-lg" onClick={() => handleOperator('/')}>/</button>
        <button className="bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-500/40 text-indigo-100 active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-lg shadow-lg" onClick={() => handleOperator('*')}>×</button>

        {/* Row 2 */}
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('7')}>7</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('8')}>8</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('9')}>9</button>
        <button className="bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-500/40 text-indigo-100 active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => handleOperator('-')}>−</button>

        {/* Row 3 */}
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('4')}>4</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('5')}>5</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('6')}>6</button>
        <button className="bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-500/40 text-indigo-100 active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => handleOperator('+')}>+</button>

        {/* Row 4 */}
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('1')}>1</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('2')}>2</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('3')}>3</button>
        <button className="row-span-2 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 border border-indigo-400/50 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-2xl shadow-[0_0_15px_rgba(99,102,241,0.5)]" onClick={performCalculation}>=</button>

        {/* Row 5 */}
        <button className="col-span-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-xl shadow-lg" onClick={() => inputDigit('0')}>0</button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white active:scale-95 transition-all duration-200 rounded-xl py-4 font-medium text-2xl shadow-lg" onClick={() => inputDigit('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;