import Contador from './components/Contador';
import { Link } from "react-router-dom";

export default function Contador(){
    return (
        
        <div>
            <h1>Atividade 02 - Contador</h1>
            <Contador/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
    );
}
