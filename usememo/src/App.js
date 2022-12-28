import './App.css';
// import {Gestion} from "./components/Gestion"
import { Tareas } from './Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        {/* ejercicio con el hook usememi */}
        <Tareas/>

        {/* Ejercicio con metodo usememo  */}
        {/* <Gestion/> */}
      </header>
    </div>
  );
}

export default App;
