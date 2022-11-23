import styled from 'styled-components';

export const StyledMain = styled.main`
  position: relative;
  padding: 3% 6%;
  background: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 5%;
  row-gap: 4vw;
  justify-content: center;

  .error-msg {
    width: 100vw;
  }
`
