import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    setAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="space-y-4">
      <input type="date" className="border p-2 rounded w-full" value={dob} onChange={e => setDob(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculateAge}>Calculate Age</button>
      {age && <div className="mt-2 text-lg font-bold">Age: {age}</div>}
    </div>
  );
};

export default AgeCalculator;
