import Relogio from './components/Relogio';
import Letreiro from './components/Letreiro';
import { Link } from "react-router-dom";

export default function Relogio(){
    return (
        
        <div>
            <h1>Atividade 01</h1>
            <Relogio/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}

export default function Calendario(){
    return (
        
        <div>
            <h1>Atividade 02</h1>
            <Letreiro/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}

