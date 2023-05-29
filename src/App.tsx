import { styled } from 'styled-components';
import { Footer } from './components/elements/Footer';
import { Header } from './components/elements/Header';
import { RouterConfig } from './RouterConfig';

function App() {
  return (
    <SApp>
      <Header title="FlutCla's Portfolio" />
      <RouterConfig></RouterConfig>
      <Footer></Footer>
    </SApp>
  );
}

const SApp = styled.div`
  text-align: center;
`;

export default App;
