import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                <Familia></Familia>
            </Card>

            <div className="Cards">
                <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#01 Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
                </div>
            </div>
        </div>
);
