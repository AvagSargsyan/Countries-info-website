import {
  StyledBorderCountries,
  StyledButton,
  StyledCountryDetails,
  StyledDetails,
  StyledDetailsContainer,
  StyledMainInfo,
  StyledOtherInfo,
} from './styles/CountryDetails.style';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from './Loader';

export default function CountryDetails({ resetSearchText, handleFilterChange }) {
  const [country, setCountry] = useState(null);
  const [localDataState, setLocalDataState] = useState('loading');

  let { countryName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullname=true`)
      .then((res) => res.json())
      .then((data) => {
        setLocalDataState('success');
        setCountry(data[0]);
      })
      .catch((error) => {
        console.log(error);
        setLocalDataState('error');
      });
  }, [countryName]);

  // Converts numbers to a more readable format
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getCurrencies = (currenciesObj) => {
    return currenciesObj[Object.keys(currenciesObj)[0]].name;
  };

  const getLanguages = (languagesObj) => {
    let result = '';
    const keys = Object.keys(languagesObj);
    if (keys.length === 1) {
      result += languagesObj[Object.keys(languagesObj)[0]];
    } else {
      keys.forEach((key, i) => {
        result +=
          i === keys.length - 1 ? languagesObj[key] : languagesObj[key] + ', ';
      });
    }

    return result;
  };

  const getBorderCountries = (borderCountriesArr) => {
    let result = '';
    borderCountriesArr.forEach((country, i) => {
      result += i === borderCountriesArr.length - 1 ? country : country + ', ';
    });
    return result;
  };

  let navigate = useNavigate();

  const errorMsg = (
    <div className="error-msg">
      <h2>Oops! an error occured while getting the data</h2> please reload the
      page
    </div>
  );

  return (
    <StyledCountryDetails>
      {country ? (
        <>
          <StyledButton onClick={() => {
            resetSearchText();
            handleFilterChange('all');
            navigate('/Countries-info-website');
          }}>
            <FaArrowLeft />
            Back
          </StyledButton>
          <StyledDetailsContainer>
            <img
              src={country.flags.svg}
              alt={country.name.common ? country.name.common : '_'}
            />
            <StyledDetails>
              <h2>{country.name.common}</h2>
              <StyledMainInfo>
                <p>
                  <span>Native Name: </span>
                  {country.name.common ? country.name.common : '_'}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population
                    ? numberWithCommas(country.population)
                    : '_'}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region ? country.region : '_'}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion ? country.subregion : '_'}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital ? country.capital : '_'}
                </p>
              </StyledMainInfo>
              <StyledOtherInfo>
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies ? getCurrencies(country.currencies) : '_'}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages ? getLanguages(country.languages) : '_'}
                </p>
              </StyledOtherInfo>
              <StyledBorderCountries>
                <span>Border Countries: </span>
                {country.borders ? getBorderCountries(country.borders) : '_'}
              </StyledBorderCountries>
            </StyledDetails>
          </StyledDetailsContainer>
        </>
      ) : localDataState === 'loading' ? (
        <Loader />
      ) : localDataState === 'error' ? (
        errorMsg
      ) : (
        'No results'
      )}
    </StyledCountryDetails>
  );
}
