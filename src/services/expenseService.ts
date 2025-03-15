import { database } from './firebaseConfig';
import { ref, push, get, set } from 'firebase/database';  // Добавьте import для set

export const addExpense = async (category: string, amount: number) => {
  const expense = {
    category,
    amount,
    date: new Date().toISOString(),
  };
  const expensesRef = ref(database, 'expenses');
  await push(expensesRef, expense);
};

export const getExpenses = async () => {
  const expensesRef = ref(database, 'expenses');
  const snapshot = await get(expensesRef);
  return snapshot.val();
};

export const deleteExpense = async (id: string) => {
  const expenseRef = ref(database, `expenses/${id}`);
  await set(expenseRef, null);  // Теперь set доступен
};
