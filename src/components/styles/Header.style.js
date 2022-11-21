import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.componentBg};
  color: ${({ theme }) => theme.textColor};
  padding: 1.5% 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;

  h1 {
    font-size: 1.4rem;
  }

  button {
    color: ${({ theme }) => theme.textColor};
    border: none;
    background: ${({ theme }) => theme.componentBg};
    font-size: 1rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`
