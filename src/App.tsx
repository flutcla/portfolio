import './App.css';
import { Header } from './components/header/header';
import { RouterConfig } from './RouterConfig';

function App() {
  return (
    <div className="App">
      <Header title="FlutCla's Portfolio" />
      <RouterConfig></RouterConfig>
    </div>
  );
}

export default App;
