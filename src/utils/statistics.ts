// utils/statistics.ts
import { getIncomes } from '../firebase/incomeService';
import { getExpenses } from '../firebase/expenseService';

export const calculateStatistics = async () => {
  const incomes = await getIncomes();
  const expenses = await getExpenses();

  let totalIncome = 0;
  let totalExpense = 0;
  const incomeCategories: Record<string, number> = {};
  const expenseCategories: Record<string, number> = {};

  // Подсчет доходов
  for (const key in incomes) {
    const income = incomes[key];
    totalIncome += income.amount;
    incomeCategories[income.category] = (incomeCategories[income.category] || 0) + income.amount;
  }

  // Подсчет расходов
  for (const key in expenses) {
    const expense = expenses[key];
    totalExpense += expense.amount;
    expenseCategories[expense.category] = (expenseCategories[expense.category] || 0) + expense.amount;
  }

  const balance = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    balance,
    incomeCategories,
    expenseCategories
  };
};
