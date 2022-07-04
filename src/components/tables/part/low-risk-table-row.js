import React, { useEffect } from 'react';

export const TableRow = ({ totalCapital, level, totalLevels, currencySymbol }) => {

    const [fundingBalance, setFundingBalance] = React.useState(0);

    useEffect(() => {
        let newBalance = 0;
        if (level === 1) {
            newBalance = totalCapital * 0.25;
        } else if (level === 2) {
            newBalance = totalCapital * 1;
        } else if (level === 3) {
            newBalance = totalCapital * 2;
        } else if (level === 4) {
            newBalance = totalCapital * 4;
        } else if (level === 5) {
            newBalance = totalCapital * 8;
        } else if (level === 6) {
            newBalance = totalCapital * 16;
        } else if (level === 7) {
            newBalance = totalCapital * 32;
        } else if (level === 8) {
            newBalance = totalCapital * 64;
        }
        setFundingBalance(newBalance);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCapital]);

    const calculateMaxLoss = (balance) => {
        return addCommnas(Math.round(balance * 0.05));
    }

    const calculateMileStone = (balance) => {
        if (totalLevels === level) return 'N/A';
        return addCommnas(Math.round(balance * 0.1));
    }
    const calculateMaxStopLoss = (balance) => {
        let b = balance * 0.015;

        return addCommnas(Math.round(b));
    }
    const addCommnas = (num) => {
        return currencySymbol + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calculateProfitSplit = (level) => {
        if (level === 1 || level === 2) {
            return "50/50";
        }
        if (level === 3 || level === 4) {
            return "60/40";
        }
        if (level === 5 || level === 6) {
            return "70/30";
        }
        if (level === 7 || level === 8) {
            return "80/20";
        }
    }
    const calculateLeverage = (leverage) =>{
        if(level < 3) return '1:10'
        if(level < 5) return '1:20'
        if(level < 7) return '1:30'
        if(level < 9) return '1:50'
    }
    console.log(fundingBalance)
    return (
        <tr>
            <td>Level {level}</td>
            <td>{addCommnas(fundingBalance)}  </td>
            <td>{calculateMileStone(fundingBalance)}</td>
            <td>{calculateMaxLoss(fundingBalance)}</td>
            <td>{calculateLeverage(level)}</td>
            <td>{calculateProfitSplit(level)}</td>
            <td>{calculateMaxStopLoss(fundingBalance)}</td>
        </tr>
    )
}

