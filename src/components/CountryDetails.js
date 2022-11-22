import { StyledBorderCountries, StyledButton, StyledCountryDetails, StyledDetails, StyledDetailsContainer, StyledMainInfo, StyledOtherInfo } from "./styles/CountryDetails.style";

export default function CountryDetails({ country }) {

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


  return (
    <StyledCountryDetails>
      <StyledButton>
        Back
      </StyledButton>
      <StyledDetailsContainer>
        <img src={country.flags.svg} alt={country.name.common} />
        <StyledDetails>
          <StyledMainInfo>
            <p><span>Native Name: </span>{country.name.common}</p>
            <p><span>Population: </span>{numberWithCommas(country.population)}</p>
            <p><span>Region: </span>{country.region}</p>
            <p><span>Sub Region: </span>{country.subregion}</p>
            <p><span>Capital: </span>{country.capital}</p>
          </StyledMainInfo>
          <StyledOtherInfo>
            <p><span>Top Level Domain: </span>{country.tld}</p>
            <p><span>Currencies: </span>{getCurrencies(country.currencies)}</p>
            <p><span>Languages: </span>{getLanguages(country.languages)}</p>
          </StyledOtherInfo>
          <StyledBorderCountries>
            <span>Border Countries: {getBorderCountries(country.borders)}</span>
          </StyledBorderCountries>
        </StyledDetails>
      </StyledDetailsContainer>
    </StyledCountryDetails>
  )
}
