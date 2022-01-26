import './App.css';
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";
import {useState} from "react";

function App() {
    const [textUsuario, setTextUsuario] = useState('Vinício Fragoso Mendes');

    return (
        <div className="App">
          <header className="App-header">
            <UsuarioEntrada setTextUsuario={setTextUsuario} textUsuario={textUsuario}/>
            <UsuarioSaida textUsuario={textUsuario}/>
          </header>
        </div>
    );
}

export default App;
