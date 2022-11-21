import Filter from './Filter';
import Search from './Search';
import { StyledSearchCountries } from './styles/SearchCountries.style';

export default function SearchCountries({ handleFilterChange, onSearch }) {

  return (
    <StyledSearchCountries>
      <Search onSearch={onSearch} />
      <Filter handleFilterChange={handleFilterChange} />
    </StyledSearchCountries>
  );
}
