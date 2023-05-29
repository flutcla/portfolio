import './App.css';
import { Footer } from './components/elements/Footer';
import { Header } from './components/elements/Header';
import { RouterConfig } from './RouterConfig';

function App() {
  return (
    <div className="App">
      <Header title="FlutCla's Portfolio" />
      <RouterConfig></RouterConfig>
      <Footer></Footer>
    </div>
  );
}

export default App;
