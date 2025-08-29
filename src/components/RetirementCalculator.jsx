import React, { useState } from 'react';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retireAge, setRetireAge] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [total, setTotal] = useState(null);

  const calculate = () => {
    const years = parseFloat(retireAge) - parseFloat(currentAge);
    if (years > 0 && monthlySavings) setTotal((years * 12 * monthlySavings).toFixed(2));
    else setTotal(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Current Age" className="border p-2 rounded w-full" value={currentAge} onChange={e => setCurrentAge(e.target.value)} />
      <input type="number" placeholder="Retirement Age" className="border p-2 rounded w-full" value={retireAge} onChange={e => setRetireAge(e.target.value)} />
      <input type="number" placeholder="Monthly Savings" className="border p-2 rounded w-full" value={monthlySavings} onChange={e => setMonthlySavings(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculate}>Calculate</button>
      {total && <div className="mt-2 text-lg font-bold">Total Savings: ₹{total}</div>}
    </div>
  );
};

export default RetirementCalculator;
