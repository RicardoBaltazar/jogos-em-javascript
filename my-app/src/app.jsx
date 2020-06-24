import React from 'react'


import Primeiro from './componentes/básicos/Primeiro'
import ComParametro from './componentes/básicos/ComParametro'
import Fragmento from './componentes/básicos/Fragmento'

export default function App(props) {
    return (
        <div>
            <Fragmento />
            <ComParametro titulo="primeiro titulo" subtitulo="Segundo titulo" />
            <Primeiro />
        </div>
    )
}