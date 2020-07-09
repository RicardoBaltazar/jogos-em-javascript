import React from 'react'


import Contador from "./componentes/Contador/Contador"
import Card from "./componentes/layout/Card"
import Input from "./componentes/formulario/Input"
import IndiretaPai from "./componentes/comunicacao/IndiretaPai"
import DiretaPai from "./componentes/comunicacao/DiretaPai"
import UsuarioInfo from "./componentes/condicional/UsuarioInfo"
import ParOuImpar from "./componentes/condicional/ParOuImpar"
import TabelaProdutos from "./componentes/repetição/TabelaProdutos"
import ListaAlunos from "./componentes/repetição/ListaAlunos"
import Familia from "./componentes/básicos/Familia"
import Aleatorio from "./componentes/básicos/Aleatorio"
import Primeiro from './componentes/básicos/Primeiro'
import ComParametro from './componentes/básicos/ComParametro'
import Fragmento from './componentes/básicos/Fragmento'

export default function App(props) {
    return (
        <div id="App">

            <div className="cards">
                <Card titulo="Contador" color="#6A5ACD">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="Componente controlado" color="#e45f56">
                    <Input/>
                </Card>

                <Card titulo="Comunicação indireta" color="#A0522D">
                    <IndiretaPai/>
                </Card>

                <Card titulo="Comunicação direta" color="#FF4500">
                    <DiretaPai/>
                </Card>

                <Card titulo="Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20}/>
                    <UsuarioInfo usuario={{nome: 'Ricardo'}}/>
                </Card>

                <Card titulo="tabela de produtos" color="#349ad9">
                    <TabelaProdutos />
                </Card>

                <Card titulo="repetição" color="#ff4c65">
                    <ListaAlunos />
                </Card>

                <Card titulo="componentes com filhos" color="#00c8f8">
                    <Familia sobrenome="Silva"/>
                </Card>

                <Card titulo="exemplo de card" color="#080">
                    <Aleatorio min={1} max={50} />
                </Card>

                <Card titulo="Fragmento" color="#000000">
                    <Fragmento />
                </Card>

                <Card titulo="Parametro" color="#0300b3">
                    <ComParametro titulo="primeiro titulo" subtitulo="Segundo titulo" />
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}