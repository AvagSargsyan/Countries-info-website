import { StyledCountryCard } from "./styles/CountryCard.style";

export default function CountryCard({ country }) {

  return (
    <StyledCountryCard>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <div>
        <h2>{country.name.common}</h2>
        <p><span>Population: </span>{country.population}</p>
        <p><span>Region: </span>{country.region}</p>
        <p><span>Capital: </span>{country.capital}</p>
      </div>
    </StyledCountryCard>
  )
}
