import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const IncomeForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    // Логика для добавления дохода
    console.log(`Категория: ${category}, Сумма: ${amount}`);
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 2 }}>
      <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
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
        sx={{ marginBottom: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
      >
        Добавить доход
      </Button>
    </Box>
  );
};

export default IncomeForm;
