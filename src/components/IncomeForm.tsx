// components/IncomeForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { addIncome } from '../firebase/incomeService';

const IncomeForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    if (category && amount) {
      await addIncome(category, parseFloat(amount));
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
          <MenuItem value="salary">Зарплата</MenuItem>
          <MenuItem value="freelance">Подработка</MenuItem>
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
        Добавить доход
      </Button>
    </div>
  );
};

export default IncomeForm;
