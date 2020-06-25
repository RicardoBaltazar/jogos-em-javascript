import React from 'react'
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    let nome = ''

    function fornecerInformações(nomeParam) {
        nome = nomeParam
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