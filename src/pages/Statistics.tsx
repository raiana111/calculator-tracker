import React, { useEffect, useState } from 'react';
import { calculateStatistics } from '../utils/statistics';

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await calculateStatistics();
      setStatistics(stats);
    };

    fetchData();
  }, []);

  if (!statistics) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Статистика</h1>
      <div>Общий доход: {statistics.totalIncome} сом</div>
      <div>Общий расход: {statistics.totalExpense} сом</div>
      <div>Баланс: {statistics.balance >= 0 ? `+${statistics.balance}` : statistics.balance} сом</div>
      <h2>Доходы по категориям:</h2>
      <ul>
        {Object.entries(statistics.incomeCategories).map(([category, amount]) => (
          <li key={category}>{category}: {amount} сом</li>
        ))}
      </ul>
      <h2>Расходы по категориям:</h2>
      <ul>
        {Object.entries(statistics.expenseCategories).map(([category, amount]) => (
          <li key={category}>{category}: {amount} сом</li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

