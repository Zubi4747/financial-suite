import React, { useState } from 'react';
import Tabs from './components/Tabs';
import LoanCalculator from './components/LoanCalculator';
import InvestmentCalculator from './components/InvestmentCalculator';
import TaxCalculator from './components/TaxCalculator';
import CurrencyConverter from './components/CurrencyConverter';
import RetirementCalculator from './components/RetirementCalculator';
import AccidentSettlementCalculator from './components/AccidentSettlementCalculator';
import InsuranceCalculator from './components/InsuranceCalculator';
import AgeCalculator from './components/AgeCalculator';

const App = () => {
  const [activeTab, setActiveTab] = useState('Loan');
  const renderTab = () => {
    switch(activeTab){
      case 'Loan': return <LoanCalculator />;
      case 'Investment': return <InvestmentCalculator />;
      case 'Tax': return <TaxCalculator />;
      case 'Currency': return <CurrencyConverter />;
      case 'Retirement': return <RetirementCalculator />;
      case 'Accident': return <AccidentSettlementCalculator />;
      case 'Insurance': return <InsuranceCalculator />;
      case 'Age': return <AgeCalculator />;
      default: return <LoanCalculator />;
    }
  }
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Financial Suite</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-white p-6 rounded shadow">{renderTab()}</div>
    </div>
  );
}
export default App;