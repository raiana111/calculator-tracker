// components/ExpenseForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { addExpense } from '../firebase/expenseService';

const ExpenseForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    if (category && amount) {
      await addExpense(category, parseFloat(amount));
      setCategory('');
      setAmount('');
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Категория</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="food">Продукты</MenuItem>
          <MenuItem value="transport">Транспорт</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Сумма"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Добавить расход
      </Button>
    </div>
  );
};

export default ExpenseForm;
