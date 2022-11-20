import Filter from './Filter';
import Search from './Search';
import { StyledSearchCountries } from './styles/SearchCountries.style';

export default function SearchCountries() {

  return (
    <StyledSearchCountries>
      <Search />
      <Filter />
    </StyledSearchCountries>
  );
}
