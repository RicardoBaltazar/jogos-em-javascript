import './Input.css'
import React, {useState} from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="input">
            <h2>{valor}</h2>
            <div className="divForm">
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
            </div>

        </div>
    )
}

//Componentes controlados tem vinculo com estados.
//para mudar o componente visual, primeiro tem que mudar o estado.
//o etado muda e o componente visual também muda