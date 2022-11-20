import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.componentBg};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 30%;
  min-width: 19rem;

  label {
    padding: 0 1.5rem;
    
    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  input {
    width: 100%;
    border-radius: 5px;
    padding: 1rem 1.5rem 1rem 0;
    background: ${({ theme }) => theme.componentBg};
    border: none;
    font-size: .9rem;

    &::placeholder {
      color: ${({ theme }) => theme.textColor};
    }

    &:focus {
      outline: none !important;
    }
  }
`
