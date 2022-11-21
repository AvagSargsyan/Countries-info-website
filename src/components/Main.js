import { StyledMain } from "./styles/Main.style";
import CountryCard from './CountryCard';

export default function Main({ list, searchText }) {

  if (searchText) {
    // filters the list based on searchText
    list = list.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()));
  }

  return (
    <StyledMain>
      {list.length ? list.map((country, i) => (
        <CountryCard country={country} key={i} />
      )) : 'No results.'}
    </StyledMain>
  )
}
