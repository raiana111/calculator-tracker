// src/utils/statistics.tsx
import React, { useEffect, useState } from 'react';
import { getExpenses } from '../services/expenseService';
import { getIncomes } from '../services/incomeService';

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomes = await getIncomes();
        const expenses = await getExpenses();

        let totalIncome = 0;
        let totalExpense = 0;
        const incomeCategories: Record<string, number> = {};
        const expenseCategories: Record<string, number> = {};

        for (const key in incomes) {
          const income = incomes[key];
          totalIncome += income.amount;
          incomeCategories[income.category] = (incomeCategories[income.category] || 0) + income.amount;
        }

        for (const key in expenses) {
          const expense = expenses[key];
          totalExpense += expense.amount;
          expenseCategories[expense.category] = (expenseCategories[expense.category] || 0) + expense.amount;
        }

        const balance = totalIncome - totalExpense;

        setStatistics({
          totalIncome,
          totalExpense,
          balance,
          incomeCategories,
          expenseCategories,
        });
      } catch (err) {
        setError('Произошла ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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












// import React, { useEffect, useState } from 'react';
// import { getExpenses } from '../services/expenseService';
// import { getIncomes } from '../services/incomeService';

// interface Income {
//   category: string;
//   amount: number;
//   date: string;
// }

// interface Expense {
//   category: string;
//   amount: number;
//   date: string;
// }

// interface Statistics {
//   totalIncome: number;
//   totalExpense: number;
//   balance: number;
//   incomeCategories: Record<string, number>;
//   expenseCategories: Record<string, number>;
// }

// const Statistics: React.FC = () => {
//   const [statistics, setStatistics] = useState<Statistics | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const incomes: Record<string, Income> = await getIncomes();  // предполагаем, что getIncomes возвращает данные с типом Record<string, Income>
//         const expenses: Record<string, Expense> = await getExpenses(); // предполагаем, что getExpenses возвращает данные с типом Record<string, Expense>

//         let totalIncome = 0;
//         let totalExpense = 0;
//         const incomeCategories: Record<string, number> = {};
//         const expenseCategories: Record<string, number> = {};

//         // Проходим по доходам и считаем сумму
//         for (const key in incomes) {
//           const income = incomes[key];
//           totalIncome += income.amount;
//           incomeCategories[income.category] = (incomeCategories[income.category] || 0) + income.amount;
//         }

//         // Проходим по расходам и считаем сумму
//         for (const key in expenses) {
//           const expense = expenses[key];
//           totalExpense += expense.amount;
//           expenseCategories[expense.category] = (expenseCategories[expense.category] || 0) + expense.amount;
//         }

//         const balance = totalIncome - totalExpense;

//         // Обновляем состояние с результатами
//         setStatistics({
//           totalIncome,
//           totalExpense,
//           balance,
//           incomeCategories,
//           expenseCategories,
//         });
//       } catch (err) {
//         setError('Произошла ошибка при загрузке данных');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Загрузка...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Статистика</h1>
//       <div>Общий доход: {statistics.totalIncome} сом</div>
//       <div>Общий расход: {statistics.totalExpense} сом</div>
//       <div>Баланс: {statistics.balance >= 0 ? `+${statistics.balance}` : statistics.balance} сом</div>
//       <h2>Доходы по категориям:</h2>
//       <ul>
//         {Object.entries(statistics.incomeCategories).map(([category, amount]) => (
//           <li key={category}>{category}: {amount} сом</li>
//         ))}
//       </ul>
//       <h2>Расходы по категориям:</h2>
//       <ul>
//         {Object.entries(statistics.expenseCategories).map(([category, amount]) => (
//           <li key={category}>{category}: {amount} сом</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Statistics;












// // src/pages/Statistics.tsx
// import React, { useEffect, useState } from 'react';
// import { getExpenses } from '../services/expenseService';
// import { getIncomes } from '../services/incomeService';
// import calculateStatistics from '../utils/statistics';  // Импорт по умолчанию

// const Statistics: React.FC = () => {
//   const [statistics, setStatistics] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const incomes = await getIncomes();
//         const expenses = await getExpenses();

//         const stats = calculateStatistics(incomes, expenses);  // Используем calculateStatistics для расчета статистики

//         setStatistics(stats);  // Устанавливаем полученные статистики
//       } catch (err) {
//         setError('Произошла ошибка при загрузке данных');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Загрузка...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Статистика</h1>
//       <div>Общий доход: {statistics.totalIncome} сом</div>
//       <div>Общий расход: {statistics.totalExpense} сом</div>
//       <div>Баланс: {statistics.balance >= 0 ? `+${statistics.balance}` : statistics.balance} сом</div>
//       <h2>Доходы по категориям:</h2>
//       <ul>
//         {Object.entries(statistics.incomeCategories).map(([category, amount]) => (
//           <li key={category}>{category}: {amount} сом</li>
//         ))}
//       </ul>
//       <h2>Расходы по категориям:</h2>
//       <ul>
//         {Object.entries(statistics.expenseCategories).map(([category, amount]) => (
//           <li key={category}>{category}: {amount} сом</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Statistics;



