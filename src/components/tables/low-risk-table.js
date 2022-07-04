import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { CurrencyContext } from '../services/currency/currency.context';
import { TableRow } from './part/low-risk-table-row';
export const LowRiskTable = () => {
    const { selectedFund, foundLevel, currencySymbol } = React.useContext(CurrencyContext);

    return (
        <Table striped responsive hover className='risk-table'>
            <thead>
                <tr className='no-border'>
                    <th>Program Level</th>
                    <th>Funding Balance</th>
                    <th>Milestone Target</th>
                    <th>Maximum Loss</th>
                    <th>Leverage</th>
                    <th>Profit Split</th>
                    <th>Max Stopless</th>
                </tr>
            </thead>
            <tbody className='shadow-sm'>
                {Array.apply(null, { length: foundLevel }).map((e, level) => (
                    <TableRow key={level} currencySymbol={currencySymbol} totalCapital={selectedFund} totalLevels={foundLevel} level={level + 1} index={level} />
                ))}
            </tbody>
        </Table>
    );
};
