import Filter from './Filter';
import Search from './Search';
import { StyledSearchCountries } from './styles/SearchCountries.style';

export default function SearchCountries({ handleFilterChange }) {

  return (
    <StyledSearchCountries>
      <Search />
      <Filter handleFilterChange={handleFilterChange} />
    </StyledSearchCountries>
  );
}
