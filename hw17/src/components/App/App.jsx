import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    }
  }
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  }
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  padding: '10px 20px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Container sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? 'Тёмная тема' : 'Светлая тема'}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Переключить тему
        </StyledButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
