import { database } from './firebaseConfig';
import { ref, set, get, child } from 'firebase/database';

export const addCategory = async (category: string, type: 'income' | 'expense') => {
  const categoryRef = ref(database, `${type}Categories/${category}`);
  await set(categoryRef, { name: category });
};

export const getCategories = async (type: 'income' | 'expense') => {
  const categoriesRef = ref(database, `${type}Categories`);
  const snapshot = await get(categoriesRef);
  return snapshot.val();
};

export const updateCategory = async (oldCategory: string, newCategory: string, type: 'income' | 'expense') => {
  const oldCategoryRef = ref(database, `${type}Categories/${oldCategory}`);
  const newCategoryRef = ref(database, `${type}Categories/${newCategory}`);
  await set(newCategoryRef, { name: newCategory });
  await set(oldCategoryRef, null); // Удаляем старую категорию
};
