import {useState} from 'react';

import Tela from './components/Tela';
import Botoes from './components/Botoes';

import './App.css';

function App() {
  
  const [valor , setValor] = useState('0')
  
  return (
    <div className="App">
       <Tela
        valor = {valor}
       />
       <Botoes
        setValor = {setValor}
        valor = {valor}
       />
    </div>
  );
}

export default App;
