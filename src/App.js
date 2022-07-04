import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TradingGrowth from './components/Trading-growth-main-component/TradingGrowth';
import Aggressive from './components/Aggressive/Aggressive';
// raw
import { LowRiskTable } from './components/tables/low-risk-table';
import { AggressiveRiskTable } from './components/tables/aggressive-risk-table';

import { CurrencyProvider } from './components/services/currency/currency.context';

function App() {
  return (
    <div>
      <>
        <CurrencyProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TradingGrowth></TradingGrowth>}>
                <Route path='/' element={<LowRiskTable></LowRiskTable>}></Route>
              </Route>
              <Route path='/aggresive' element={<TradingGrowth></TradingGrowth>}>
                <Route path='/aggresive' element={<AggressiveRiskTable></AggressiveRiskTable>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CurrencyProvider>
      </>
    </div>
  );
}

export default App;
