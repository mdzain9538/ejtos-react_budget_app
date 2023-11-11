import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const { currency } = useContext(AppContext);


  const handleBudgetChange = (event) => {
    const updatedBudget = event.target.value;
    setNewBudget(updatedBudget);

    // Check if the new budget is less than the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    if (updatedBudget < totalExpenses) {
      alert("You cannot reduce the budget value less than the spending");
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget:{currency}{budget}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};

export default Budget;

