import React from 'react';
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Loan','Investment','Tax','Currency','Retirement','Accident','Insurance','Age'];
  return <div className="flex flex-wrap justify-center gap-2">{tabs.map(tab=>(
    <button key={tab} onClick={()=>setActiveTab(tab)} className={`px-4 py-2 rounded ${activeTab===tab?'bg-blue-600 text-white':'bg-gray-200 text-gray-700'}`}>{tab}</button>
  ))}</div>;
}
export default Tabs;