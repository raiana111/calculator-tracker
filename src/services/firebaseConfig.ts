import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const app = initializeApp({
  databaseURL: "https://calculator-tracker-8c379-default-rtdb.europe-west1.firebasedatabase.app/"
});

export const database = getDatabase(app);
