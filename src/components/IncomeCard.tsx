// components/IncomeCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { addIncome } from '../firebase/incomeService';

interface IncomeCardProps {
  category: string;
  amount: number;
  id: string;
  onDelete: (id: string) => void;
}

const IncomeCard: React.FC<IncomeCardProps> = ({ category, amount, id, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{category}</Typography>
        <Typography variant="body1">Сумма: {amount} сом</Typography>
        <Button onClick={() => onDelete(id)} color="secondary">Удалить</Button>
      </CardContent>
    </Card>
  );
};

export default IncomeCard;
