import React, { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const inc = parseFloat(income);
    if (!inc) return setTax(null);
    let t = 0;
    if (inc <= 250000) t = 0;
    else if (inc <= 500000) t = (inc - 250000) * 0.05;
    else if (inc <= 1000000) t = 12500 + (inc - 500000) * 0.2;
    else t = 112500 + (inc - 1000000) * 0.3;
    setTax(t.toFixed(2));
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Income" className="border p-2 rounded w-full" value={income} onChange={e => setIncome(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculateTax}>Calculate Tax</button>
      {tax && <div className="mt-2 text-lg font-bold">Tax: ₹{tax}</div>}
    </div>
  );
};

export default TaxCalculator;
