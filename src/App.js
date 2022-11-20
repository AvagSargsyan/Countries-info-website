import { Container } from './components/styles/Container.style';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        test
      </Container>
    </>
  );
}

export default App;
