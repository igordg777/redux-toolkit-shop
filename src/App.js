import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import User from './components/User'
import Main from './components/shop/Main';
import Goods from './components/shop/Goods';
import Order from './components/shop/Order';
function App() {
  return (
    <div className="App">
      {/* <User /> */}
      <h1>Магазин супер товаров</h1>
      <Router>
        <div>
          <nav>
            <ul className='navbar'>
              <li>
                <Link to="/main">Главная</Link>
              </li>
              <li>
                <Link to="/goods">Товары</Link>
              </li>
              <li>
                <Link to="/order">Корзина</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>

            <Route path="/main" element={<Main />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
