import { StyledCountryCard } from "./styles/CountryCard.style";

export default function CountryCard({ country }) {
  return (
    <StyledCountryCard>
      {country.name.common}
    </StyledCountryCard>
  )
}
