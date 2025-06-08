import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotesPage from './pages/NotesPage';
import TodosPage from './pages/TodosPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: darkMode ? '#90caf9' : '#1976d2',
          },
          secondary: {
            main: darkMode ? '#f48fb1' : '#dc004e',
          },
          background: {
            default: darkMode ? '#121212' : '#f5f5f5',
            paper: darkMode ? '#1e1e1e' : '#ffffff',
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/todos" element={<TodosPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;