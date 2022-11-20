import { Container } from './components/styles/Container.style';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import SearchCountries from './components/SearchCountries';
import Main from './components/Main';

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
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    // Dont't forget to handle errors!!!
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountriesList(data));
  }, []);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Container>
          <Header onToggleMode={toggleMode} darkMode={darkMode} />
          <SearchCountries />
          <Main list={countriesList} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
