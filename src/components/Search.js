import { StyledSearch } from './styles/Search.style';
import { FaSearch } from 'react-icons/fa';

export default function Search({ onSearch }) {
  return (
    <StyledSearch>
      <label htmlFor="searchCountry">
        <FaSearch />
      </label>
      <input
        id="searchCountry"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </StyledSearch>
  );
}
