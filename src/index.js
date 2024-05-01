import React from 'react';                       // importa o react para dentro da aplicação - local no node
import ReactDOM from 'react-dom/client';         // para usar o virtualDom (vai direto no elemento)                       // importando o index.css - assim que eu importo um arquivo.
import MinhasRotas from "./minhasRotas";
import {BrowserRouter, Route, Routes} from "react-router-dom";

  const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render (
      <MinhasRotas />
    );
   
