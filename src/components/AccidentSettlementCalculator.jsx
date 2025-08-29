import React, { useState } from 'react';

const AccidentSettlementCalculator = () => {
  const [claim, setClaim] = useState('');
  const [settlement, setSettlement] = useState(null);

  const calculate = () => {
    const c = parseFloat(claim);
    if (c) setSettlement((c * 0.8).toFixed(2)); // Example: 80% settlement
    else setSettlement(null);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Claim Amount" className="border p-2 rounded w-full" value={claim} onChange={e => setClaim(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculate}>Calculate Settlement</button>
      {settlement && <div className="mt-2 text-lg font-bold">Settlement: ₹{settlement}</div>}
    </div>
  );
};

export default AccidentSettlementCalculator;
