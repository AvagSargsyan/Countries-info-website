import { Container } from './components/styles/Container.style';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { useState } from 'react';

const lightTheme = {
  background: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  componentBg: '#fff',
};

const darkTheme = {
  background: 'hsl(207, 26%, 17%)',
  textColor: 'hsl(0, 0%, 100%)',
  componentBg: 'hsl(209, 23%, 22%)',
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Container>
          <Header onToggleMode={toggleMode} darkMode={darkMode} />
          test
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
