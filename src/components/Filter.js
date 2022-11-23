import { StyledFilter } from './styles/Filter.style';

export default function Filter({ handleFilterChange }) {
  return (
    <StyledFilter>
      <select
        name="regions"
        id="regions"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </StyledFilter>
  );
}
