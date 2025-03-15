import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';  // Для создания ссылок

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h1" gutterBottom align="center" sx={{ color: '#3f51b5' }}>
        Добро пожаловать в калькулятор расходов и доходов!
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '2rem' }}>
        Здесь вы можете отслеживать свои доходы и расходы, а также получать статистику.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: '1rem' }}
          component={Link}
          to="/add-income"
        >
          Добавить доход
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/add-expense"
        >
          Добавить расход
        </Button>
      </div>
    </Container>
  );
};

export default Home;
