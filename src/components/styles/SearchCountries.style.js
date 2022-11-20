import styled from 'styled-components';

export const StyledSearchCountries = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  padding: 2% 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
`
