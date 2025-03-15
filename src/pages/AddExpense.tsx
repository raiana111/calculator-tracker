// src/pages/AddExpense.tsx
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense: React.FC = () => {
  return (
    <div>
      <h1>Добавить расход</h1>
      <ExpenseForm />
    </div>
  );
};

export default AddExpense;
