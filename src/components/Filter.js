import { StyledFilter } from "./styles/Filter.style";

export default function Filter() {

  return (
    <StyledFilter>
      <select name="regions" id="regions">
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </StyledFilter>
  )
}
