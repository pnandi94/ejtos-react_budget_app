import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);

        // Calculate total spending
        const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

        // Validate new budget against total spending
        if (newBudget < totalSpending) { 
            alert("New budget cannot be lower than total spending!");
            return;
        }


        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                value={budget}
                onChange={handleBudgetChange}
                min={0}
                max={20000}
            />
        </div>
    );
};

export default Budget;