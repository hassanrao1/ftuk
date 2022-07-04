import React, { createContext, useEffect, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {

    const currencyFunds =
    {
        USD: [90000, 60000, 40000, 14000],
        GBP: [70000, 40000, 30000, 10000],
        EURO: [80000, 50000, 36000, 12000],
    }

    const [currency, setCurrency] = useState('USD');
    const [currencySymbol, setCurrencySymbol] = useState('$');
    const [selectedFund, setSelectedFund] = useState(currencyFunds.USD[0]);
    const [foundLevel, setFoundLevel] = useState(8);
    const [riskType, setRiskType] = useState('low risk');



    useEffect(() => {
        if (currencyFunds[currency][3] === selectedFund) {
            setFoundLevel(8);
        } else {
            setFoundLevel(7);
        }
        // eslint-disable-next-line
    }, [selectedFund]);


    useEffect(() => {
        setSelectedFund(currencyFunds[currency][0]);
        switch (currency) {
            case 'USD':
                setCurrencySymbol('$');
                break;
            case 'GBP':
                setCurrencySymbol('£');
                break;
            case 'EURO':
                setCurrencySymbol('€');
                break;
            default:
                setCurrencySymbol('$');
                break;
        }
    }, [currency]);



    return (
        <CurrencyContext.Provider value={{
            currencyFunds,
            currency,
            currencySymbol,
            setCurrency,
            setSelectedFund,
            selectedFund,
            foundLevel,
            riskType,
            setRiskType
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}
