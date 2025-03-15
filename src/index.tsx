// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'; // Подключение стилей, если есть
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );











import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Если есть свои стили
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Создание кастомной темы
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',  // Цвет основного компонента (например, кнопки)
    },
    secondary: {
      main: '#f50057',  // Цвет для второстепенных компонентов (например, кнопки удаления)
    },
    background: {
      default: '#f5f5f5', // Цвет фона страницы
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',  // Шрифт приложения
    h1: {
      fontWeight: 600, // Толщина шрифта для заголовков
    },
    body1: {
      fontWeight: 400, // Толщина шрифта для основного текста
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />  {/* Это сбрасывает стили по умолчанию и применяет вашу тему */}
    <App />
  </ThemeProvider>
);
