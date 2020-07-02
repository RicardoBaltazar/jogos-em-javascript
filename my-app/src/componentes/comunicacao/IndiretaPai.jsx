//a partir do use state podemos criar stados dentro dos componentes

import React, {useState} from 'react'
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    let [nome, setNome] = useState('')

    function fornecerInformações(nome) {
        setNome(nome)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformações} />
        </div>
    )
}