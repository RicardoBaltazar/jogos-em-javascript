import React from 'react'

import Card from "./componentes/layout/Card"

import Aleatorio from "./componentes/básicos/Aleatorio"
import Primeiro from './componentes/básicos/Primeiro'
import ComParametro from './componentes/básicos/ComParametro'
import Fragmento from './componentes/básicos/Fragmento'

export default function App(props) {
    return (
        <div>
            <Card titulo="exemplo de card">
                <Aleatorio min={1} max={50}/>
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="Parametro">
                <ComParametro titulo="primeiro titulo" subtitulo="Segundo titulo" />
                <Primeiro />
            </Card>
        </div>
    )
}