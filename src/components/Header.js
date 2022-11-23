import { StyledHeader } from './styles/Header.style';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

export default function Header({ onToggleMode, darkMode }) {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <button onClick={onToggleMode}>
        {darkMode ? <FaMoon /> : <FaRegMoon />}
        Dark Mode
      </button>
    </StyledHeader>
  );
}
