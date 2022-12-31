import logo from './logo.svg';
import './App.css';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MiUsuario/>
      </header>
    </div>
  );
}

export default App;
