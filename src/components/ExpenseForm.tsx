import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const ExpenseForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    // Здесь будет логика добавления расхода
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
          <MenuItem value="food">Продукты</MenuItem>
          <MenuItem value="transport">Транспорт</MenuItem>
          <MenuItem value="utilities">Коммунальные услуги</MenuItem>
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
        Добавить расход
      </Button>
    </Box>
  );
};

export default ExpenseForm;
