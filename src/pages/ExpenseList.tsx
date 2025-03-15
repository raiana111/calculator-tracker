import React, { useEffect, useState } from 'react';
import { getExpenses } from '../services/expenseService';
import ExpenseCard from '../components/ExpenseCard';

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExpenses();
      setExpenses(Object.values(data || {}));
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await firebase.database().ref('expenses').child(id).remove();
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Список расходов</h1>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} {...expense} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;
