import { StyledLoader } from './styles/Loader.style';

export default function Loader() {
  return (
    <StyledLoader>
      <div className="loader"></div>
      <p>Loading...</p>
    </StyledLoader>
  );
}
