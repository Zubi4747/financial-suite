import React, { useState } from 'react';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(years) * 12;
    if (P && R && N) {
      const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiVal.toFixed(2));
    } else setEmi(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Principal" className="border p-2 rounded w-full" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Annual Interest Rate %" className="border p-2 rounded w-full" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Years" className="border p-2 rounded w-full" value={years} onChange={e => setYears(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculateEMI}>Calculate EMI</button>
      {emi && <div className="mt-2 text-lg font-bold">EMI: ₹{emi}</div>}
    </div>
  );
};

export default LoanCalculator;
