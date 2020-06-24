import React from 'react'

import Aleatorio from "./componentes/básicos/Aleatorio"
import Primeiro from './componentes/básicos/Primeiro'
import ComParametro from './componentes/básicos/ComParametro'
import Fragmento from './componentes/básicos/Fragmento'

export default function App(props) {
    return (
        <div>
            <Aleatorio min={1} max={50}/>
            <Fragmento />
            <ComParametro titulo="primeiro titulo" subtitulo="Segundo titulo" />
            <Primeiro />
        </div>
    )
}