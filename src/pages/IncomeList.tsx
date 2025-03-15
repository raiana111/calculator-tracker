import React, { useEffect, useState } from 'react';
import { getIncomes } from '../services/incomeService';
import IncomeCard from '../components/IncomeCard';

const IncomeList: React.FC = () => {
  const [incomes, setIncomes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncomes();
      setIncomes(Object.values(data || {}));
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await firebase.database().ref('incomes').child(id).remove();
    setIncomes((prev) => prev.filter((income) => income.id !== id));
  };

  return (
    <div>
      <h1>Список доходов</h1>
      {incomes.map((income) => (
        <IncomeCard key={income.id} {...income} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default IncomeList;
