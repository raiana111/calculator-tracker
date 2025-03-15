import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface ExpenseCardProps {
  category: string;
  amount: number;
  id: string;
  onDelete: (id: string) => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ category, amount, id, onDelete }) => {
  return (
    <Card sx={{ marginBottom: '1rem', borderRadius: '8px', boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{category}</Typography>
        <Typography variant="body1">Сумма: {amount} сом</Typography>
        <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            onClick={() => onDelete(id)} 
            color="secondary"
            variant="outlined"
            sx={{ borderRadius: '20px' }}
          >
            Удалить
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;
