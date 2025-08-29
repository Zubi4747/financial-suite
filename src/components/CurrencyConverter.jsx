import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [converted, setConverted] = useState(null);

  const convert = () => {
    const amt = parseFloat(amount);
    const r = parseFloat(rate);
    if (amt && r) setConverted((amt * r).toFixed(2));
    else setConverted(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Amount" className="border p-2 rounded w-full" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="number" placeholder="Exchange Rate" className="border p-2 rounded w-full" value={rate} onChange={e => setRate(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={convert}>Convert</button>
      {converted && <div className="mt-2 text-lg font-bold">Converted: {converted}</div>}
    </div>
  );
};

export default CurrencyConverter;
