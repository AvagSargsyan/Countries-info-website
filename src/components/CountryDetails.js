import { StyledBorderCountries, StyledButton, StyledCountryDetails, StyledDetails, StyledDetailsContainer, StyledMainInfo, StyledOtherInfo } from "./styles/CountryDetails.style";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export default function CountryDetails() {

  const [country, setCountry] = useState(null);
  let { countryName } = useParams();

  useEffect(() => {
    // Dont't forget to handle errors!!!
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullname=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch(error => console.log('Nooooo!', error))
  }, [countryName]);

  // Converts numbers to a more readable format
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getCurrencies = (currenciesObj) => {
    return currenciesObj[Object.keys(currenciesObj)[0]].name;
  }

  const getLanguages = (languagesObj) => {
    let result = '';
    const keys = Object.keys(languagesObj);
    if (keys.length === 1) {
      result += languagesObj[Object.keys(languagesObj)[0]];
    } else {
      keys.forEach((key, i) => {
        result += i === keys.length - 1 ? languagesObj[key] : languagesObj[key] + ', ';
      })
    }

    return result;
  }

  const getBorderCountries = (borderCountriesArr) => {
    let result = '';
    borderCountriesArr.forEach((country, i) => {
      result += i === borderCountriesArr.length - 1 ? country : country + ', ';
    });
    return result;
  }

  let navigate = useNavigate();

  return (
    <StyledCountryDetails>
      {country ? <>
        <StyledButton onClick={() => navigate('/')}>
          <FaArrowLeft />
          Back
        </StyledButton>
        <StyledDetailsContainer>
          <img src={country.flags.svg} alt={country.name.common ? country.name.common : ''} />
          <StyledDetails>
            <h2>{country.name.common}</h2>
            <StyledMainInfo>
              <p><span>Native Name: </span>{country.name.common ? country.name.common : ''}</p>
              <p><span>Population: </span>{country.population ? numberWithCommas(country.population) : ''}</p>
              <p><span>Region: </span>{country.region ? country.region : ''}</p>
              <p><span>Sub Region: </span>{country.subregion ? country.subregion : ''}</p>
              <p><span>Capital: </span>{country.capital ? country.capital : ''}</p>
            </StyledMainInfo>
            <StyledOtherInfo>
              <p><span>Top Level Domain: </span>{country.tld}</p>
              <p><span>Currencies: </span>{country.currencies ? getCurrencies(country.currencies) : ''}</p>
              <p><span>Languages: </span>{country.languages ? getLanguages(country.languages) : ''}</p>
            </StyledOtherInfo>
            <StyledBorderCountries>
              <span>Border Countries: {country.borders ? getBorderCountries(country.borders) : ''}</span>
            </StyledBorderCountries>
          </StyledDetails>
        </StyledDetailsContainer>
      </> : 'Loading...'}
    </StyledCountryDetails>
  )
}
