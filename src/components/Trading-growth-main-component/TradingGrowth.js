import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { CurrencyContext } from '../services/currency/currency.context';

const TradingGrowth = () => {
    const { currency, currencySymbol, currencyFunds, setSelectedFund, selectedFund, riskType } = React.useContext(CurrencyContext);


    const addCommnas = (num) => {
        return currencySymbol + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className='trading-growth-schedule my-5'>
            <div className="container mt-4">

                <Navigation ></Navigation>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="sidebar mt-3">
                            {currencyFunds[currency].map((fund, index) => {
                                return (
                                    <div
                                        className={selectedFund === fund ? 'trader-menu active-fund' : 'trader-menu'}
                                        onClick={() => {
                                            setSelectedFund(fund)
                                        }
                                        }
                                        key={index} >
                                        <p className='lead m-0'>
                                            <strong>{addCommnas(fund)} {riskType.toUpperCase()}  </strong>
                                        </p>
                                    </div>
                                )
                            }
                            )}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="risk-table-view">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TradingGrowth;
