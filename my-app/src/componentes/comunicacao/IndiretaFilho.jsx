import React from 'react'

export default props => {
    let cb = props.quandoClicar
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ function(){cb('João')}}>
                 Fornecer informações
            </button>
        </div>
    )
}