import { styled } from 'styled-components';
import { Footer } from './components/elements/Footer';
import { Header } from './components/elements/Header';
import { RouterConfig } from './RouterConfig';

function App() {
  return (
    <SApp>
      <Header title="FlutCla's Portfolio" />
      <Content>
        <RouterConfig />
      </Content>
      <Footer />
    </SApp>
  );
}

const SApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

export default App;
