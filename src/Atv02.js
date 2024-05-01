import Letreiro from './components/Letreiro';
import { Link } from "react-router-dom";

export default function Atv02(){
    return (
        
        <div>
            <h1>Atividade 02</h1>
            <Letreiro/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}
