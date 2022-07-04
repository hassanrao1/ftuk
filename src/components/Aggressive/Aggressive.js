import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Aggressive = () => {
    return (
        <div className='trading-growth-schedule my-5'>
            <div className="container">

                <Navigation></Navigation>
                <div className="row">
                    <div className="col-md-3">
                        <div className="trader-menu">
                            <Link to='aggressive90'>
                                <button>90k AGGRESSIVE</button>
                            </Link>
                            <Link to='aggressive60'>
                                <button>60k AGGRESSIVE</button>
                            </Link>
                            <Link to='aggressive40'>
                                <button>40k AGGRESSIVE</button>
                            </Link>
                            <Link to='aggressive14'>
                                <button>14k AGGRESSIVE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aggressive;