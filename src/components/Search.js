import { StyledSearch } from "./styles/Search.style"
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';

export default function Search() {

  const [searchText, setSearchText] = useState('');

  return (
    <StyledSearch>
      <label htmlFor="searchCountry">
        <FaSearch />
      </label>
      <input
        id="searchCountry"
        type="text"
        placeholder="Search for a country..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </StyledSearch>
  )
}
