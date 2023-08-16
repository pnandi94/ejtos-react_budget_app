import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css'

const Currency = () => {
    const { dispatch, state } = useContext(AppContext);
    const currencies = [
        { symbol: '£', name: 'Pound' },
        { symbol: '€', name: 'Euro' },
        { symbol: '$', name: 'Dollar' },
        { symbol: '₹', name: 'Rupee' },
    ];
    //console.log(currencies)
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <select
            onChange={handleCurrencyChange}
            className='custom-select'
            //style={{ backgroundColor: 'lightgreen', color: 'black' }}
            id='currency-dropdown'
        >   
            {currencies.map((curr) => (
                <option key={curr.symbol} value={curr.symbol}>
                    {curr.symbol} {curr.name}
                </option>
            ))}

        </select>);
};

export default Currency;