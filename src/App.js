import { Container } from './components/styles/Container.style';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import SearchCountries from './components/SearchCountries';
import Main from './components/Main';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

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
  const [dataState, setDataState] = useState('loading');
  const [darkMode, setDarkMode] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const [searchText, setSearchText] = useState('');

  let completeListRef = useRef();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setDataState('success');
        completeListRef.current = data;
        setCountriesList(completeListRef.current);
      })
      .catch((error) => {
        setDataState('error');
        console.log('error');
      });
  }, []);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleFilterChange = (value) => {
    if (value === 'all') {
      setCountriesList(completeListRef.current);
      return;
    }
    const filteredList = completeListRef.current.filter(
      (country) => country.region === value
    );
    setCountriesList(filteredList);
  };

  const onSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Container>
            <Header onToggleMode={toggleMode} darkMode={darkMode} />
          </Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchCountries
                    handleFilterChange={handleFilterChange}
                    onSearch={onSearch}
                  />
                  <Main
                    list={countriesList}
                    searchText={searchText}
                    dataState={dataState}
                  />
                </>
              }
            />
            <Route
              path={`/country/:countryName`}
              element={<CountryDetails dataState={dataState} />}
            />
            <Route path={`*`} element={<ErrorPage />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
