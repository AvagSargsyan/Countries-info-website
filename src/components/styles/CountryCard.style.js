import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.componentBg};
  border-radius: 5px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: 0.1s ease-in;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  div {
    padding: 0.5rem;
    h2 {
      margin: 1rem 0;
      font-size: 1.1rem;
      font-weight: 800;
    }
    
    p {
      font-size: 0.9rem;
      padding: 0.1rem 0;
      font-weight: 300;
      span {
        font-weight: 600;
      }
    }

  }

  &:hover {
    transform: scale(1.04);
  }

`
