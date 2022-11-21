import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 3% 6%;
  background: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 5%;
  row-gap: 4vw;
  justify-content: center;
`
