import { StyledMain } from "./styles/Main.style";
import CountryCard from './CountryCard';

export default function Main({ list }) {

  return (
    <StyledMain>
      {list.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}
    </StyledMain>
  )
}