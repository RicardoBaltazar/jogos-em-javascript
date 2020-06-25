import React from 'react'
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    function fornecerInformações(nome){
        console.log(nome)
    }

    return (
        <div>
            <IndiretaFilho quandoClicar={fornecerInformações}/>
        </div>
    )
}