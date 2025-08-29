import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFV = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 100;
    const N = parseFloat(years);
    if (P && R && N) setFutureValue((P * Math.pow(1 + R, N)).toFixed(2));
    else setFutureValue(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Amount" className="border p-2 rounded w-full" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="number" placeholder="Annual Growth Rate %" className="border p-2 rounded w-full" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Years" className="border p-2 rounded w-full" value={years} onChange={e => setYears(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculateFV}>Calculate Future Value</button>
      {futureValue && <div className="mt-2 text-lg font-bold">Future Value: ₹{futureValue}</div>}
    </div>
  );
};

export default InvestmentCalculator;
