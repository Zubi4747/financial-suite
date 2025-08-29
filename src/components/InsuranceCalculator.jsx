import React, { useState } from 'react';

const InsuranceCalculator = () => {
  const [premium, setPremium] = useState('');
  const [coverage, setCoverage] = useState(null);

  const calculate = () => {
    const p = parseFloat(premium);
    if (p) setCoverage((p * 10).toFixed(2)); // Example: coverage 10x premium
    else setCoverage(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Monthly Premium" className="border p-2 rounded w-full" value={premium} onChange={e => setPremium(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculate}>Calculate Coverage</button>
      {coverage && <div className="mt-2 text-lg font-bold">Coverage: ₹{coverage}</div>}
    </div>
  );
};

export default InsuranceCalculator;
