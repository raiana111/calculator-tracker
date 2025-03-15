import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddExpense from './pages/AddExpense';  // Убедитесь, что это правильный путь
import AddIncome from './pages/AddIncome';  // Убедитесь, что это правильный путь
import ExpenseList from './pages/ExpenseList';
import IncomeList from './pages/IncomeList';
import Statistics from './pages/Statistics';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/add-income" element={<AddIncome />} />
        <Route path="/expense-list" element={<ExpenseList />} />
        <Route path="/income-list" element={<IncomeList />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
