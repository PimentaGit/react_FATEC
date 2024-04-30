import Relogio from './components/Relogio';
import Letreiro from './components/Letreiro';
import { Link } from "react-router-dom";

export default function Atv01(){
    return (
        <div>
            <h1>Atividade 01</h1>
            <Relogio/>
            <Letreiro/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
    );
}
