import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: absolute;
  top: 30vh;
  right: 50%;
  transform: translateX(50%);

  .loader {
  border: 8px solid ${({ theme }) => theme.componentBg};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.textColor};
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1.5s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
