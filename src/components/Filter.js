import { useState } from "react";
import { StyledFilter } from "./styles/Filter.style";

export default function Filter() {

  const [filterValue, setFilterValue] = useState('all');

  return (
    <StyledFilter>
      <select name="regions" id="regions" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </select>
    </StyledFilter>
  )
}
