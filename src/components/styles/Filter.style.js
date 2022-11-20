import styled from 'styled-components';

export const StyledFilter = styled.div`
  width: 15%;
  min-width: 12rem;

  select {
    width: 100%;
    padding: 1rem 1.5rem;
    background: ${({ theme }) => theme.componentBg};
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    outline: none !important;
  }
`
