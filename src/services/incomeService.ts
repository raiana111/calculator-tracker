import { database } from './firebaseConfig';
import { ref, push, get, set } from 'firebase/database';  // Добавьте импорт для set

export const addIncome = async (category: string, amount: number) => {
  const income = {
    category,
    amount,
    date: new Date().toISOString(),
  };
  const incomeRef = ref(database, 'incomes');
  await push(incomeRef, income);
};

export const getIncomes = async () => {
  const incomeRef = ref(database, 'incomes');
  const snapshot = await get(incomeRef);
  return snapshot.val();
};

export const deleteIncome = async (id: string) => {
  const incomeRef = ref(database, `incomes/${id}`);
  await set(incomeRef, null);  // Теперь set доступен
};
