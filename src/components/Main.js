import { StyledMain } from './styles/Main.style';
import CountryCard from './CountryCard';
import Loader from './Loader';

export default function Main({ list, searchText, dataState }) {
  if (searchText) {
    // filters the list based on searchText
    list = list.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const errorMsg = (
    <div className="error-msg">
      <h2>Oops! an error occured while getting the data</h2> please reload the
      page
    </div>
  );

  return (
    <StyledMain>
      {list.length ? (
        list.map((country, i) => <CountryCard country={country} key={i} />)
      ) : dataState === 'loading' ? (
        <Loader />
      ) : dataState === 'error' ? (
        errorMsg
      ) : (
        'No results.'
      )}
    </StyledMain>
  );
}
