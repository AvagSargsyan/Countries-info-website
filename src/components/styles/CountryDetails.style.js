import styled from 'styled-components';

export const StyledCountryDetails = styled.div`
  position: relative;
  padding: 5%;
  max-width: 100vw;
  max-height: 100vh;
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.componentBg};
  border: none;
  padding: .8rem 2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  cursor: pointer;
  transition: .1s;
  
  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledDetailsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  
  
  img {
    width: 600px;
    padding: 0 0.5rem;
    min-width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    
    img {
      width: 100%;
    }

    div {
      width: 100%;
    }
  }
  
`;

export const StyledDetails = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: 
    "header header"
    "main other"
    "border border";
  gap: 1rem;

    @media (max-width: 768px) {
      grid-template-rows: 1fr 3fr 3fr 1fr;
      grid-template-areas: 
        "header header"
        "main main"
        "other other"
        "border border";
    }
  h2 {
    grid-area: header;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
`;

export const StyledMainInfo = styled.div`
  grid-area: main;

  p {
    padding: 0.2rem 0;

    span {
      font-weight: 600;
      margin-right: 0.2rem;
    }
  }
`;

export const StyledOtherInfo = styled.div`
  grid-area: other;

  p {
    padding: 0.2rem 0;

    span {
      font-weight: 600;
      margin-right: 0.2rem;
    }
  }
`;

export const StyledBorderCountries = styled.div`
  grid-area: border;

  span {
    font-weight: 600;
  }
`;
