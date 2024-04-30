import React from 'react';
import{Link}  from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <nav>
                <h1> Página Inicial</h1>
                <ul>
                    <li>
                        <link to="/Atv01">Atividade 01</link>
                    </li>
                    <li>
                        <link to="/Atv02">Atividade 02</link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;